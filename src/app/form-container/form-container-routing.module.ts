import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormContainerStep3Component } from './form-container-step-3.component';

export const routes: Routes = [
  { path: '', component: FormContainerStep3Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormContainerStep3RoutingModule {}
