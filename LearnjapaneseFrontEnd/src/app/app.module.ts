import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ManageruserComponent } from './manageruser/manageruser.component';
import { FooterComponent } from './footer/footer.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ManageraskComponent } from './managerask/managerask.component';
import { ListquestionComponent } from './listquestion/listquestion.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { AddsucessComponent } from './addsucess/addsucess.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ManageruserComponent,
    FooterComponent,
    AdduserComponent,
    ManageraskComponent,
    ListquestionComponent,
    AddquestionComponent,
    AddsucessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
