import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.css']
})
export class RfComponent implements OnInit {
  form:FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'email':new FormControl('',[Validators.required,Validators.email]),
      'pwd':new FormControl('',Validators.required),
    })
      
  }

  onSubmit(form){
    console.log(form);

  }

}
