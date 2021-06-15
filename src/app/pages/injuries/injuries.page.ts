import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Injury } from 'src/app/models/injury';
import { Tenant } from 'src/app/models/tenant';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { InjuriesService } from 'src/app/services/injuries.service';
import { LocationsService } from 'src/app/services/locations.service';
import { StatusService } from 'src/app/services/status.service';
import { SwalService } from 'src/app/services/swal.service';
import { TenantsService } from 'src/app/services/tenants.service';

@Component({
  selector: 'app-injuries',
  templateUrl: './injuries.page.html',
  styleUrls: ['./injuries.page.scss'],
})
export class InjuriesPage implements OnInit {

  injuries: Injury[];
  currentTenant: Tenant;

  constructor(
    private authenticationService: AuthenticationService,
    private swalService: SwalService,
    private injuriesService: InjuriesService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.injuriesService.getAllInjuries().subscribe(
      (result) => { this.injuries = result; console.log(result) }
    );

    this.currentTenant = this.authenticationService.currentUserValue;
  }

  goToEdit(index: number) {
    this.router.navigate(['./update-injury'], { relativeTo: this.route, state: { injury: this.injuries[index]._id.$oid } });
  }

  refresh() {
    this.injuriesService.getAllInjuries().subscribe(
      (result) => { 
        this.injuries = result;
      }
    );
  }

  goToAddInjury() {
    this.router.navigate(['./add-injury'], { relativeTo: this.route });
  }

  deleteInjury(index: number) {
    this.swalService.showConfirmation("Delete Injury", "Are you sure you want to delete this Injury?")
      .then((result) => {
        if (result.isConfirmed) {
          this.injuriesService.deleteInjury(this.injuries[index]._id.$oid).subscribe(
            () => { this.refresh(); }
          )
        }
      });
  }
}
