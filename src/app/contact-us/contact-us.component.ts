import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { isError } from 'util';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  myForm: FormGroup;
	response: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      fname: ['', [Validators.required,
                  Validators.minLength(2),
                  Validators.maxLength(20)]],
      lname: ['', [Validators.required,
                  Validators.minLength(2),
                  Validators.maxLength(20)]],
      email: ['', [Validators.required,
            Validators.email]],
      phone: ['', [Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20)]],
      birth: ['', [Validators.required,
                   this.dateValidator]],
      comments: ['', [Validators.required,
                      Validators.minLength(5),
                      Validators.maxLength(400)]],
    });
  }

  get fname() {
	  return this.myForm.get('fname');
  }

  get lname() {
	  return this.myForm.get('lname');
  }

  get email() {
	  return this.myForm.get('email');
  }

  get phone() {
	  return this.myForm.get('phone');
  }

  get birth() {
	  return this.myForm.get('birth');
  }

  get comments() {
	  return this.myForm.get('comments');
  }

  onSubmit() {
      console.log(this.myForm);
  }

  dateValidator(control: FormControl) {
	const inputDate = control.value;
	const threshold = moment().subtract(100, 'years')

	if ( moment(inputDate).isAfter(moment()) || moment(inputDate).isBefore(threshold) ) {
		return {
			isError: true
		}
	}
	// console.log (moment(inputDate).isAfter(threshold));
	return null;
  }
}