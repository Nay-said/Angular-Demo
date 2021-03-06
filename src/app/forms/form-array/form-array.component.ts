import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  dataSource: MatTableDataSource<unknown>
  transferSettingsForm: FormArray
  displayedColumns: string[] = [
    'transferCustomerName', 
    'trnasferProdName', 
    'transferQuantity', 
    'transferDescription'
  ]
  transferSettings: {
    transferCustomerName: string
    trnasferProdName: string
    transferQuantity: number
    transferDescription: string
  }[]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.transferSettingsForm = new FormArray([])
    this.dataSource = new MatTableDataSource(this.transferSettingsForm.controls)
    this.getData()
  }

  getData() {
    this.getElement(
      [	{
        transferCustomerName: 'Jon Doe',
        trnasferProdName: 'Some item',
        transferQuantity: 3,
        transferDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, eligendi.'
      },
      {
        transferCustomerName: 'James Bond',
        trnasferProdName: 'Some other item',
        transferQuantity: 5,
        transferDescription: 'Provident, praesentium dolore? Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      }]
    )
  }

  getElement(data) {
    data.forEach((element) => {
      this.transferSettingsForm.push(
        this.transferSettingsFormControl(element)
      )
    })
    console.log('TransferForm:', this.transferSettingsForm)
  }

  transferSettingsFormControl(formData): FormGroup {
    return this.fb.group({
      transferCustomerName: { value: formData.transferCustomerName, disabled: false },
      trnasferProdName: { value: formData.trnasferProdName, disabled: false },
      transferQuantity: { value: formData.transferQuantity, disabled: false },
      transferDescription: { value: formData.transferDescription, disabled: false },
    })
  }

  newData() {
    this.addRow()
    this.dataSource.data = this.transferSettingsForm.controls
  }

  addRow() {
    this.transferSettingsForm.controls.push(
      this.fb.group({
        transferCustomerName: { value: '', disabled: false },
        trnasferProdName: { value: '', disabled: false },
        transferQuantity: { value: '', disabled: false },
        transferDescription: { value: '', disabled: false },
      })
    )
  }

}
