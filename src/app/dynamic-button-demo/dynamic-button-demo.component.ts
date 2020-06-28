import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder  } from '@angular/forms';
import { DynamicButtonComponent } from '../abstract-components/dynamic-button/dynamic-button.component';

@Component({
  selector: 'app-dynamic-button-demo',
  templateUrl: './dynamic-button-demo.component.html',
  styleUrls: ['./dynamic-button-demo.component.css']
})
export class DynamicButtonDemoComponent implements OnInit {
  @ViewChild(DynamicButtonComponent, {static: false}) form: DynamicButtonComponent;
  buttonUsage: string;
  dynamicButtonConfigureForm: FormGroup;
  use: any;
  buttonConfig = {
    name: '',
    usage: '',
    color: ''
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // For dev & demo purpose, provide a form to customise the button.
    this.dynamicButtonConfigureForm = this.fb.group({
      name: [''],
      usage: [''],
      color: ['accent']
    });

  }

  onSubmit() {
    this.buttonConfig = {
      name: this.dynamicButtonConfigureForm['controls'].name.value,
      usage: this.dynamicButtonConfigureForm['controls'].usage.value,
      color: this.dynamicButtonConfigureForm['controls'].color.value
    }
    this.use = this.dynamicButtonConfigureForm['controls'].usage.value;
    console.log("Parent Config:", this.buttonConfig);
  }

  get name() {
    return this.dynamicButtonConfigureForm.get('name');
  }

  get usage() {
    return this.dynamicButtonConfigureForm.get('usage');
  }

  get color() {
    return this.dynamicButtonConfigureForm.get('color');
  }
}