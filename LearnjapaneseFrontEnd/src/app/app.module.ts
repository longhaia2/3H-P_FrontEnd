import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ManageruserComponent } from './Manh/manageruser/manageruser.component';
import { AdduserComponent } from './Manh/adduser/adduser.component';
import { ManageraskComponent } from './Manh/managerask/managerask.component';
import { ListquestionComponent } from './Manh/listquestion/listquestion.component';
import { AddquestionComponent } from './Manh/addquestion/addquestion.component';
import { AddsucessComponent } from './Manh/addsucess/addsucess.component';

import { QuanlibaihocComponent } from './Thuan/quanlibaihoc/quanlibaihoc.component';
import { DangnhapComponent } from './Thuan/dangnhap/dangnhap.component';
import { AddlessonComponent } from './Thuan/quanlibaihoc/addlesson/addlesson.component';
import { EditbaihocComponent } from './Thuan/quanlibaihoc/editbaihoc/editbaihoc.component';
import { VocabularyComponent } from './Hien/vocabulary/vocabulary.component';
import { GrammarComponent } from './Hien/grammar/grammar.component';
import { ReviewvocabularyComponent } from './Hien/reviewvocabulary/reviewvocabulary.component';
import { RegistrationComponent } from './Hien/registration/registration.component';
import { LoginComponent } from './Hien/login/login.component';
import { ReviewgrammarComponent } from './Hien/reviewgrammar/reviewgrammar.component';
import { HistoryComponent } from './Hien/history/history.component';
import { HeaderComponent } from './Hai/header/header.component';
import { MenuComponent } from './Hai/menu/menu.component';
import { HomepageComponent } from './Hai/homepage/homepage.component';
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
import {FooterComponent} from './Hai/footer/footer.component';
import {SidebarComponent} from "./Hai/sidebar/sidebar.component";


@NgModule({
  declarations: [
    AppComponent,
    ManageruserComponent,
    AdduserComponent,
    ManageraskComponent,
    ListquestionComponent,
    AddquestionComponent,
    AddsucessComponent,
    QuanlibaihocComponent,
    DangnhapComponent,
    AddlessonComponent,
    EditbaihocComponent,
    VocabularyComponent,
    GrammarComponent,
    ReviewvocabularyComponent,
    RegistrationComponent,
    LoginComponent,
    ReviewgrammarComponent,
    HistoryComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomepageComponent,
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
    ManageraddquestionfortestComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
