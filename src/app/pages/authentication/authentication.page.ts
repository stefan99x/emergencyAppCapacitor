import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Credentials } from 'src/app/models/credentials';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {
  public loginForm: FormGroup;

  credentials: Credentials = new Credentials();

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private alertController: AlertController
  ) {

    this.loginForm = this.fb.group({
      email: [
        null, [
          Validators.required,
          Validators.email,
        ]
      ],
      password: [
        null, [
          Validators.required,
        ]
      ]
    });
  }


  ngOnInit() {
  }



  login(): void {
    this.authenticationService.login(
      this.loginForm.controls.email.value,
      this.loginForm.controls.password.value
    )
      .subscribe(() => this.router.navigate(["/profile"]));
  }

  goToRegister() {
    this.router.navigate(['./register'], { relativeTo: this.route });
  }

  goToNearbyChat(){
    console.log("PAIIIIIIIIIIIIN")
    this.router.navigate(['./nearby-messages']);
  }
}
