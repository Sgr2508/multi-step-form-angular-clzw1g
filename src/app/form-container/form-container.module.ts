import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContainerStep3Component } from './form-container-step-3.component';
import { FormContainerStep3RoutingModule } from './form-container-step-3-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormContainerStep3RoutingModule, ReactiveFormsModule],
  declarations: [FormContainerStep3Component],
})
export class FormContainerStep3Module {}
