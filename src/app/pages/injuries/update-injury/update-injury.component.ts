import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Injury } from 'src/app/models/injury';
import { Tenant } from 'src/app/models/tenant';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { InjuriesService } from 'src/app/services/injuries.service';

@Component({
  selector: 'app-update-injury',
  templateUrl: './update-injury.component.html',
  styleUrls: ['./update-injury.component.scss']
})
export class UpdateInjuryComponent implements OnInit {
  currentTenant: Tenant;
  updateInjuryForm: FormGroup;
  selectedBodyPart: any;
  selectedInjuryId: string;
  public bodyParts = [
    { key: 'Head', value: '60c8f69b4e823f11a314343f' },
    { key: 'Left Arm', value: '60c8f71c4e823f11a3143440' },
    { key: 'Right Arm', value: '60c8f73b4e823f11a3143441' },
    { key: 'Torso', value: '60c8f74d4e823f11a3143442' },
    { key: 'Left Leg', value: '60c8f7634e823f11a3143443' },
    { key: 'Right Leg', value: '60c8f7844e823f11a3143444' },
  ];
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private injuriesService: InjuriesService,
    private authentication: AuthenticationService,
  ) {
    this.updateInjuryForm = this.fb.group({
      bodyPartId: [null, [Validators.required,]],
      description: [null, [Validators.required,]]
    });
  }

  ngOnInit() {
    this.selectedInjuryId = this.router.getCurrentNavigation().extras.state.injury;
    this.currentTenant = this.authentication.currentUserValue;
  }

  updateInjury() {
    var injury = new Injury(this.updateInjuryForm.value)
    console.log(injury)
    injury.tenantId = this.currentTenant.id;
    injury.tenantName = this.currentTenant.firstName + " " + this.currentTenant.lastName;
    injury._id = this.selectedInjuryId;
    injury.bodyPartName = "Torso";
    console.log(injury);
    
    this.injuriesService.updateInjury(this.currentTenant.id, injury).subscribe(
      () => {
        this.router.navigate(["/injuries"]);
        this.updateInjuryForm.reset();
      }
    )
  }

  goBack() {
    this.router.navigate(['./..'], { relativeTo: this.route });
  }

  getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

}
