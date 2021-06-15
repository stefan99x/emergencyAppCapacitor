import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tenant } from 'src/app/models/tenant';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SwalService } from 'src/app/services/swal.service';
import { TenantsService } from 'src/app/services/tenants.service';

@Component({
  selector: 'app-update-tenant',
  templateUrl: './update-tenant.component.html',
  styleUrls: ['./update-tenant.component.scss']
})
export class UpdateTenantComponent implements OnInit {

  public updateForm: FormGroup;
  public currentTenant: Tenant;
  constructor(
    private authenticationService: AuthenticationService,
    private tenantsService: TenantsService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private swalService: SwalService
  ) {
    this.updateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email,]],
      firstName: [null, [Validators.required,]],
      lastName: [null, [Validators.required,]],
      password: [null, [Validators.required,]],
      age: [null, [Validators.required, Validators.min(0), Validators.max(120)]],
    });
  }

  ngOnInit() {
    this.currentTenant = this.authenticationService.currentUserValue;
    console.log(this.currentTenant);
  }

  updateTenant() {
    var updatedTenant = new Tenant(this.updateForm.value);
    this.tenantsService.updateTenant(this.currentTenant.id, updatedTenant).subscribe(
      ()=> {
        this.swalService.showSuccessEdit();
        this.router.navigate(["/profile"])}
    )
  }

  goBack() {
    this.router.navigate(['./..'], { relativeTo: this.route });
  }

}
