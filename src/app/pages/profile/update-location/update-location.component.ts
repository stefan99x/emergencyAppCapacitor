import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartment } from 'src/app/models/apartment';
import { Tenant } from 'src/app/models/tenant';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.scss']
})
export class UpdateLocationComponent implements OnInit {

  public updateLocationTenantForm: FormGroup;
  public currentTenant: Tenant;
  constructor(
    private authenticationService: AuthenticationService,
    private locationService: LocationsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,

  ) {
    this.updateLocationTenantForm = this.fb.group({
      floor: [null, [Validators.required]],
      number: [null, [Validators.required]]
    });
  }

  ngOnInit() {
    this.currentTenant = this.authenticationService.currentUserValue;
    console.log(this.currentTenant);
  }

  updateLocationTenant() {
    var updateLocation = new Apartment(this.updateLocationTenantForm.value);
    updateLocation.tenantId = this.currentTenant.id;
    this.locationService.updateApartment(this.currentTenant.id, updateLocation).subscribe(
      ()=> {this.router.navigate(["/profile"])}
    )
  }

  goBack() {
    this.router.navigate(['./..'], { relativeTo: this.route });
  }
}
