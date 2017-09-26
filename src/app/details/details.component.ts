import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  detailsForm : FormGroup;

  constructor (private fb: FormBuilder) {
     this.createForm();
  }

  createForm(){
    this.detailsForm = this.fb.group({        
      firstname: ['',[ Validators.required,Validators.minLength(10)]],
      lastname: '',
      title: '',
      genderopt: '',
      sendsms: '',
      address: this.fb.group({
        city: '',
        street:'',
        postcode:''
      })  
    })
  }

    onSubmit(){

      /*if(this.detailsForm.invalid){
        alert('error')
        return;	
      } */

      console.log(this.detailsForm.value);
    }

}
