import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  onSubmit(form){
    let email = form.value.email;
    let pwd = form.value.pwd;
    
    
    
  }
}
