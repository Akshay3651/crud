import { CustomPipePipe } from './../pipe/custom-pipe.pipe';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-tf',
  templateUrl: './tf.component.html',
  styleUrls: ['./tf.component.css']
})
export class TfComponent implements OnInit {
  
  @Input('emailname') customProperty:string="another string";

  @Output('callCustomEvent')
  newCustomEvent = new EventEmitter<string>();
  msg : String = 'Email Already Exist.';
  constructor() { }

  ngOnInit() {
  }
chk :boolean = false;
  checkEmail(email){
    if(email.length > 0){
      return this.chk = true;
    }else{
      return this.chk = false;
    }
  }

  onSubmit(form){
//console.log(this.count);
  }

  
  callCustomEvent(eventdata){
    this.newCustomEvent.emit(eventdata.value);
  }

}
