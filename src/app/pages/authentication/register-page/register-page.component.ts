import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from 'src/app/models/register';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SwalService } from 'src/app/services/swal.service';

@Component({
  selector: 'app-register.page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  public registerForm: FormGroup;
  public email: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public age: number;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private swalService: SwalService
  ) {
    this.registerForm = this.fb.group({
      email: [null, [Validators.required, Validators.email,]],
      password: [null, [Validators.required,]],
      firstName: [null, [Validators.required,]],
      lastName: [null, [Validators.required,]],
      age: [null, [Validators.required, Validators.min(0), Validators.max(120)]],
    });
  }

  register() {
    var register = new Register(this.registerForm.value);
    this.authenticationService.register(register)
      .subscribe(
        () => {
          this.swalService.activationOk();
          this.router.navigate(["/profile"]); }
      );
  }

  ngOnInit() { }
}
