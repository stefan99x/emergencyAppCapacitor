import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Injury } from 'src/app/models/injury';
import { Tenant } from 'src/app/models/tenant';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { InjuriesService } from 'src/app/services/injuries.service';

@Component({
  selector: 'app-add-injury',
  templateUrl: './add-injury.component.html',
  styleUrls: ['./add-injury.component.scss']
})
export class AddInjuryComponent implements OnInit {
  currentTenant: Tenant;
  addInjuryForm: FormGroup;
  selectedBodyPart: any;
  public bodyParts = [
    { key: 'Head', value: '60c8f69b4e823f11a314343f' },
    { key: 'Left Arm', value: '60c8f71c4e823f11a3143440' },
    { key: 'Right Arm', value: '60c8f73b4e823f11a3143441' },
    { key: 'Torso', value: '60c8f74d4e823f11a3143442' },
    { key: 'Left Leg', value: '60c8f7634e823f11a3143443' },
    { key: 'Right Leg', value: '60c8f7844e823f11a3143444' }
  ];
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private injuriesService: InjuriesService,
    private authentication: AuthenticationService,
  ) {
    this.addInjuryForm = this.fb.group({
      bodyPartId: [null, [Validators.required,]],
      description: [null, [Validators.required,]]
    });
  }

  ngOnInit() {
    this.currentTenant = this.authentication.currentUserValue;
  }

  addInjury() {
    var injury = new Injury(this.addInjuryForm.value)
    injury.tenantId = this.currentTenant.id;
    this.injuriesService.addTenantInjury(injury).subscribe(
      () => {
        this.router.navigate(["/injuries"]);
        this.addInjuryForm.reset();
      }
    )
  }

  goBack() {
    this.router.navigate(['./..'], { relativeTo: this.route });
  }

}
