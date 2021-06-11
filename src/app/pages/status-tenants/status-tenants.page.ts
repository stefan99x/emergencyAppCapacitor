import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from 'src/app/models/status';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-status-tenants',
  templateUrl: './status-tenants.page.html',
  styleUrls: ['./status-tenants.page.scss'],
})
export class StatusTenantsPage implements OnInit {

  public statusUsers: Status[];
  public statusON: Status[];
  public statusINJURED: Status[];
  public statusUNKNOWN: Status[];
  public statusNOT_IN_THE_BUILDING: Status[];

  constructor(private statusService: StatusService) { }

  ngOnInit() {
    this.statusService.getAllStatusON()
      .subscribe(
        (result) => {
          this.statusON = result;
          console.log(this.statusON.length)
          console.log(this.statusON[0].tenantName)
        }
      );
    this.statusService.getAllStatusINJURED()
      .subscribe(
        (result) => {
          this.statusINJURED = result;
          console.log(result)
        }
      );
    this.statusService.getAllStatusUNKNOWN()
      .subscribe(
        (result) => {
          this.statusUNKNOWN = result;
          console.log(result)
        }
      );
    this.statusService.getAllStatusNOT_IN_THE_BUILDING()
      .subscribe(
        (result) => {
          this.statusNOT_IN_THE_BUILDING = result;
          console.log(result)
        }
      );
  }

}
