import { ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Apartment } from 'src/app/models/apartment';
import { Status } from 'src/app/models/status';
import { Tenant } from 'src/app/models/tenant';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LocationsService } from 'src/app/services/locations.service';
import { StatusService } from 'src/app/services/status.service';
import { TenantsService } from 'src/app/services/tenants.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public currentTenant: Tenant;
  public currentLocation: Apartment;
  public currentStatus: Status;
  public subscrition: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
    private locationService: LocationsService,
    private statusService: StatusService,
    private tenantsService: TenantsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.tenantsService.getTenant(this.authenticationService.currentUserValue.id)
      .subscribe(
        (result) => { this.currentTenant = result[0]; console.log(result[0]); }
      );

    this.locationService.getTenantApartment(this.authenticationService.currentUserValue.id)
      .subscribe(
        (result) => { this.currentLocation = result[0]; console.log(result[0]); console.log(this.currentLocation) }
      );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/authentication"]);
  }

  goToUpdate() {
    this.router.navigate(['./update-tenant'], { relativeTo: this.route });
  }

  goToUpdateLocation() {
    this.router.navigate(['./update-location-tenant'], { relativeTo: this.route });
  }

  goBack() {
    this.router.navigate(['./..'], { relativeTo: this.route });
  }
}
