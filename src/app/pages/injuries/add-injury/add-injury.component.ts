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
    { key: 'Head', value: '60dac29452b08a49ac3be442' },
    { key: 'Left Arm', value: '60dac2b852b08a49ac3be444' },
    { key: 'Right Arm', value: '60dac2c352b08a49ac3be445' },
    { key: 'Torso', value: '60dac2a652b08a49ac3be443' },
    { key: 'Left Leg', value: '60dac2cd52b08a49ac3be446' },
    { key: 'Right Leg', value: '60dac2de52b08a49ac3be447' }
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
    injury.bodyPartName = "Head";
    injury.tenantName = this.currentTenant.firstName + " " + this.currentTenant.lastName 
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
