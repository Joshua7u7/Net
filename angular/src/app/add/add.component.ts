import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  messageForm: FormGroup;
  submited = false;
  success = false;

  constructor(private data: DataService,private formBuilder:FormBuilder) { 
    this.messageForm = this.formBuilder.group({
      name:['',Validators.required],
      age:['',Validators.required]
    });
  }

  onSubmit()
  {
    this.submited=true;

    if(this.messageForm.invalid)
      return;
    else
    {
      const body ={
        'nombre':this.messageForm.controls.name.value,
        'edad':this.messageForm.controls.age.value
      };
      console.log(body);
      
      this.data.addPersona(body).subscribe();
      this.success=true;
    }

  }

  ngOnInit() {
  }

}
