import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { RfComponent } from './rf/rf.component';
import { TfComponent } from './tf/tf.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { CustomPipePipe } from './pipe/custom-pipe.pipe';
import { AnotherPipePipe } from './pipe/another-pipe.pipe';
import { CustomDirectiveDirective } from './directive/custom-directive.directive';
import { CrudService } from './Services/crud.service';



const appRoutes : Routes =[
  { path: 'templte-form', component: TfComponent },
  {path:'reactive-form',component:RfComponent},
  {path:'',redirectTo:'templte-form',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponentComponent}
 ];

@NgModule({
  declarations: [
    AppComponent,
    RfComponent,
    TfComponent,
    PageNotFoundComponentComponent,
    CustomPipePipe,
    AnotherPipePipe,
    CustomDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,{
        enableTracing:false
      }
    )
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
