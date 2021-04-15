import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ManageruserComponent } from './Manh/manageruser/manageruser.component';
import { AdduserComponent } from './Manh/adduser/adduser.component';
import { ManageraskComponent } from './Manh/managerask/managerask.component';
import { ListquestionComponent } from './Hien/listquestion/listquestion.component';
import { AddquestionComponent } from './Hien/addquestion/addquestion.component';
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
import {FooterComponent} from './Hai/footer/footer.component';
import {ManagerRoutingModule} from './Hai/manager-routing.module';
import { TestN1Component } from './Hai/usertest/test-n1/test-n1.component';
import { TestN2Component } from './Hai/usertest/test-n2/test-n2.component';
import { TestN3Component } from './Hai/usertest/test-n3/test-n3.component';
import { TestN4Component } from './Hai/usertest/test-n4/test-n4.component';
import { TestN5Component } from './Hai/usertest/test-n5/test-n5.component';
import { StudyN1Component } from './Hai/study/study-n1/study-n1.component';
import { StudyN2Component } from './Hai/study/study-n2/study-n2.component';
import { StudyN3Component } from './Hai/study/study-n3/study-n3.component';
import { StudyN4Component } from './Hai/study/study-n4/study-n4.component';
import { StudyN5Component } from './Hai/study/study-n5/study-n5.component';
import { StudyAlphabetComponent } from './Hai/study/study-alphabet/study-alphabet.component';
import { StudyKanjiComponent } from './Hai/study/study-kanji/study-kanji.component';
import { SidebarLessonComponent } from './Hai/sidebar-lesson/sidebar-lesson.component';
import {MatTabsModule} from '@angular/material/tabs';
import { InformationComponent } from './Hai/information/information.component';
import { ListchallengeComponent } from './Hai/challenge/listchallenge/listchallenge.component';
import { WaitlchallengeComponent } from './Hai/challenge/waitlchallenge/waitlchallenge.component';
import { CompetitionComponent } from './Hai/challenge/competition/competition.component';
import { EndcompetitionComponent } from './Hai/challenge/endcompetition/endcompetition.component';
import { SidebaradminComponent } from './Manh/sidebaradmin/sidebaradmin.component';
import {HttpClientModule} from "@angular/common/http";
import { DetailuserComponent } from './Manh/detailuser/detailuser.component';
import { SidebarchallengeComponent } from './Hai/challenge/sidebarchallenge/sidebarchallenge.component';
import {FormsModule} from '@angular/forms';
import { CreateroomComponent } from './Hai/challenge/createroom/createroom.component';
import { HomeadminComponent } from './Hai/admin/homeadmin/homeadmin.component';
import { HeaderadminComponent } from './Thuan/headeradmin/headeradmin.component';
import { ManagerexamComponent } from './Hai/admin/managerexam/managerexam.component';
import { ManagerexamaddComponent } from './Hai/admin/managerexam/managerexamadd/managerexamadd.component';
import { ManagerexameditComponent } from './Hai/admin/managerexam/managerexamedit/managerexamedit.component';
import { ProfileComponent } from './Manh/profile/profile.component';
import {CountdownModule} from "ngx-countdown";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import { AngularFireDatabaseModule} from "@angular/fire/database";
import { FlexLayoutModule } from '@angular/flex-layout';




// @ts-ignore
// @ts-ignore
// @ts-ignore

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
    SidebarComponent,
    TestjlptComponent,
    ListtestjlptComponent,
    StarttestjlptComponent,
    EndtestjlptComponent,
    ManagerquestionComponent,
    ManageruserComponent,
    ManagertestComponent,
    ManagerlisttestComponent,
    ManageraddtestComponent,
    ManageraddquestionComponent,
    ManagerlistquestionComponent,
    ManageraddquestionfortestComponent,
    FooterComponent,
    TestN1Component,
    TestN2Component,
    TestN3Component,
    TestN4Component,
    TestN5Component,
    StudyN1Component,
    StudyN2Component,
    StudyN3Component,
    StudyN4Component,
    StudyN5Component,
    StudyAlphabetComponent,
    StudyKanjiComponent,
    SidebarLessonComponent,
    InformationComponent,
    ListchallengeComponent,
    WaitlchallengeComponent,
    CompetitionComponent,
    EndcompetitionComponent,
    SidebaradminComponent,
    DetailuserComponent,
    SidebarchallengeComponent,
    CreateroomComponent,
    HomeadminComponent,
    HeaderadminComponent,
    ManagerexamComponent,
    ManagerexamaddComponent,
    ManagerexameditComponent,
    ProfileComponent,

  ],
    imports: [
        BrowserModule,
        RouterModule,
        ManagerRoutingModule,
        MatTabsModule,
        FormsModule,
        HttpClientModule,
      CountdownModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireDatabaseModule,
      FlexLayoutModule,


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
