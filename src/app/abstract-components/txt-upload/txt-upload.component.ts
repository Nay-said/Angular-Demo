import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-txt-upload',
  templateUrl: './txt-upload.component.html',
  styleUrls: ['./txt-upload.component.css']
})
export class TxtUploadComponent implements OnInit {
  file: File = null
  fileContent: any
  parseResult = []
  isFileValid: boolean = false
  fileFormControl = new FormControl('')
  fileName: string

  @Output() txtFileContent: EventEmitter<any> = new EventEmitter<any>()
  
  constructor() { }

  ngOnInit() {
  }

   // Accept uplaoded file and process content for parsing
   txtUploadHandler(event) {
    // console.log(event.target.files);
    // Only accepting txt file with plain text
    if (event.target.files[0]) {
      if (event.target.files[0].type == 'text/plain') {
        this.file = event.target.files[0]
        // Reads txt file then output a stirng of numbers
        let reader = new FileReader()
        reader.onload = () => {
          this.fileContent = reader.result
          // console.log('Content of File:', this.fileContent);
          this.isFileValid = true
          this.parse()
          // '\filename.txt'
          const splitFileAddress = this.fileFormControl.value.split(/\\/)
          this.fileName = splitFileAddress[splitFileAddress.length - 1]
        }
        reader.readAsText(this.file)
      } else {
        alert('Please upload txt file!')
      }
    }
  }

  // parse() is fired when upload button is clicked
  parse() {
    if (!this.file) {
      alert('No selection!')
      return
    } else {
      let contentString = this.fileContent.replace(/\r\n/g, '\n').split('\n')
      this.parseResult = []
      contentString = contentString.filter((value) => value !== '')
      console.log(contentString)
      // Take each element of stirng then push into array individually
      for (let i = 0; i < contentString.length; i++) {
        let reg = /^\s*[a-zA-Z]*\d+[a-zA-Z]*\s*$/
        // console.log(contentString[i]);
        if (contentString[i].match(/^[ ]*$/)) {
          console.log('this string is all space or empty')
          contentString.splice(i, 1)
          i++
          continue
        }
        if (reg.test(contentString[i])) {
          this.parseResult.push(contentString[i])
        } else {
          alert('Unlawful letters exist in the file!')
          return
        }
      }
      // console.log('parseResult:', this.parseResult, typeof(this.parseResult));

      this.txtFileContent.emit(this.parseResult)
    }
  }

  removeFile() {
    this.fileFormControl.setValue('')
    this.txtFileContent.emit([])
    this.fileName = ''
    this.isFileValid = false
  }
}
