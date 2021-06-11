/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddInjuryComponent } from './add-injury.component';

describe('AddInjuryComponent', () => {
  let component: AddInjuryComponent;
  let fixture: ComponentFixture<AddInjuryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInjuryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInjuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
