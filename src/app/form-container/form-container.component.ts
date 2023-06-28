import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormContainerComponent } from '../form-container.component';

@Component({
  selector: 'app-form-container-step-3',
  templateUrl: './form-container-step-3.component.html',
  styleUrls: ['./form-container-step-3.component.css'],
})
export class FormContainerStep3Component implements OnInit {
  form: FormGroup;

  constructor(private formContainer: FormContainerComponent) {}

  ngOnInit() {
    this.form = this.formContainer.getStep3Form();
  }

  submit(): void {
    alert('Formulário enviado!');
  }
}
