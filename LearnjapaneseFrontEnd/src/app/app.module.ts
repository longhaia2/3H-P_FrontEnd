import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Hai/header/header.component';
import { FooterComponent } from './Hai/footer/footer.component';
import { MenuComponent } from './Hai/menu/menu.component';
import { HomepageComponent } from './Hai/homepage/homepage.component';
import { SidebarComponent } from './Hai/sidebar/sidebar.component';
import { TestjlptComponent } from './Hai/usertest/testjlpt/testjlpt.component';
import { ListtestjlptComponent } from './Hai/usertest/listtestjlpt/listtestjlpt.component';
import { StarttestjlptComponent } from './Hai/usertest/starttestjlpt/starttestjlpt.component';
import { EndtestjlptComponent } from './Hai/usertest/endtestjlpt/endtestjlpt.component';
import {RouterModule} from '@angular/router';
import { ManagerquestionComponent } from './Hai/admin/managerquestion/managerquestion.component';
import { ManagertestComponent } from './Hai/admin/managertest/managertest.component';
import { ManagerlisttestComponent } from './Hai/admin/managertest/managerlisttest/managerlisttest.component';
import { ManageraddtestComponent } from './Hai/admin/managertest/manageraddtest/manageraddtest.component';
import { ManageraddquestionComponent } from './Hai/admin/managerquestion/manageraddquestion/manageraddquestion.component';
import { ManagerlistquestionComponent } from './Hai/admin/managerquestion/managerlistquestion/managerlistquestion.component';
import { ManageraddquestionfortestComponent } from './Hai/admin/managertest/manageraddquestionfortest/manageraddquestionfortest.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomepageComponent,
    SidebarComponent,
    TestjlptComponent,
    ListtestjlptComponent,
    StarttestjlptComponent,
    EndtestjlptComponent,
    ManagerquestionComponent,
    ManagertestComponent,
    ManagerlisttestComponent,
    ManageraddtestComponent,
    ManageraddquestionComponent,
    ManagerlistquestionComponent,
    ManageraddquestionfortestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
