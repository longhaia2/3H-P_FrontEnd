import { NgModule } from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ManageruserComponent } from './Manh/manageruser/manageruser.component';
import { AdduserComponent } from './Manh/adduser/adduser.component';
import { ManageraskComponent } from './Manh/managerask/managerask.component';
import { ListquestionComponent } from './Hien/listquestion/listquestion.component';
import { AddquestionComponent } from './Hien/addquestion/addquestion.component';
import { AddsucessComponent } from './Manh/addsucess/addsucess.component';

import { QuanlibaihocComponent } from './Thuan/quanlibaihoc/quanlibaihoc.component';
import { AddlessonComponent } from './Thuan/quanlibaihoc/addlesson/addlesson.component';
import { EditbaihocComponent } from './Thuan/quanlibaihoc/editbaihoc/editbaihoc.component';
import { VocabularyComponent } from './Hien/vocabulary/vocabulary.component';
import { GrammarComponent } from './Hien/grammar/grammar.component';
import { ReviewvocabularyComponent } from './Hien/reviewvocabulary/reviewvocabulary.component';
import { RegistrationComponent } from './Hien/registration/registration.component';
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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { CreateroomComponent } from './Hai/challenge/createroom/createroom.component';
import { HomeadminComponent } from './Hai/admin/homeadmin/homeadmin.component';
import { HeaderadminComponent } from './Thuan/headeradmin/headeradmin.component';
import {DetailComponent} from "./Thuan/quanlibaihoc/detail/detail.component";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {NgxPaginationModule} from "ngx-pagination";
import { ManagerexamComponent } from './Hai/admin/managerexam/managerexam.component';
import { ManagerexamaddComponent } from './Hai/admin/managerexam/managerexamadd/managerexamadd.component';
import { RegisterComponent } from './_services/register/register.component';
import { HomeComponent } from './_services/home/home.component';
import { ProfileComponent } from './_services/profile/profile.component';
import { BoardAdminComponent } from './_services/board-admin/board-admin.component';
import { BoardModeratorComponent } from './_services/board-moderator/board-moderator.component';
import { BoardUserComponent } from './_services/board-user/board-user.component';
import {authInterceptorProviders} from './_helpers/auth.interceptor';
import {LoginComponent} from './_services/login/login.component';
import { QuizComponent } from './Hai/challenge/quiz/quiz.component';
import {CountdownModule} from "ngx-countdown";
// import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
// import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DialogInputPassComponent } from './Hai/challenge/dialog-input-pass/dialog-input-pass.component';
import { DialogJoinRoomComponent } from './Hai/challenge/dialog-join-room/dialog-join-room.component';
import { N1TuvungComponent } from './Hai/study/study-n1/n1-tuvung/n1-tuvung.component';
import { N1NguphapComponent } from './Hai/study/study-n1/n1-nguphap/n1-nguphap.component';
import { HomeTvComponent } from './Hai/study/home-tv/home-tv.component';
import { HomeNpComponent } from './Hai/study/home-np/home-np.component';
import { N2TuvungComponent } from './Hai/study/study-n2/n2-tuvung/n2-tuvung.component';
import { N2NguphapComponent } from './Hai/study/study-n2/n2-nguphap/n2-nguphap.component';
import { N3TuvungComponent } from './Hai/study/study-n3/n3-tuvung/n3-tuvung.component';
import { N3NguphapComponent } from './Hai/study/study-n3/n3-nguphap/n3-nguphap.component';
import { N4TuvungComponent } from './Hai/study/study-n4/n4-tuvung/n4-tuvung.component';
import { N4NguphapComponent } from './Hai/study/study-n4/n4-nguphap/n4-nguphap.component';
import { N5NguphapComponent } from './Hai/study/study-n5/n5-nguphap/n5-nguphap.component';
import { N5TuvungComponent } from './Hai/study/study-n5/n5-tuvung/n5-tuvung.component';
import { ChitietlessonComponent } from './Thuan/chitietlesson/chitietlesson.component';
import { ToptestComponent } from './Hai/toptest/toptest.component';
import { DialogComponent } from './Thuan/dialog/dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from "@angular/common";
import {ToastrModule} from "ngx-toastr";
import { ManagerexamupdateComponent } from './Hai/admin/managerexam/managerexamupdate/managerexamupdate.component';
import { N1TuvungOntapComponent } from './Hai/study/study-n1/n1-tuvung-ontap/n1-tuvung-ontap.component';
import { N1NguphapOntapComponent } from './Hai/study/study-n1/n1-nguphap-ontap/n1-nguphap-ontap.component';
import { HomeOntapComponent } from './Hai/study/home-ontap/home-ontap.component';
import { MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";



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
    AddlessonComponent,
    EditbaihocComponent,
    VocabularyComponent,
    GrammarComponent,
    ReviewvocabularyComponent,
    RegistrationComponent,
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
    DetailComponent,
    ManagerexamComponent,
    ManagerexamaddComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    LoginComponent,
    QuizComponent,
    DialogInputPassComponent,
    DialogJoinRoomComponent,
    N1TuvungComponent,
    N1NguphapComponent,
    HomeTvComponent,
    HomeNpComponent,
    N2TuvungComponent,
    N2NguphapComponent,
    N3TuvungComponent,
    N3NguphapComponent,
    N4TuvungComponent,
    N4NguphapComponent,
    N5NguphapComponent,
    N5TuvungComponent,
    ChitietlessonComponent,
    ToptestComponent,
    DialogComponent,

    ManagerexamupdateComponent,
    N1TuvungOntapComponent,
    N1NguphapOntapComponent,
    HomeOntapComponent,



  ],
    // imports: [
    //     BrowserModule,
    //     RouterModule,
    //     ManagerRoutingModule,
    //     MatTabsModule,
    //     FormsModule,
    //     CKEditorModule,
    //     HttpClientModule,
    //     Ng2SearchPipeModule,
    //     NgxPaginationModule,
    //     ReactiveFormsModule,
    //     CountdownModule,
    //     MatDialogModule,
    //     MatIconModule,
    //     CommonModule,
    //     MatPaginatorModule,
    //     BrowserAnimationsModule, // required animations module
    //     ToastrModule.forRoot(),
    //     MatFormFieldModule,
        // ToastrModule added
  imports: [
    BrowserModule,
    RouterModule,
    ManagerRoutingModule,
    MatTabsModule,
    FormsModule,
    CKEditorModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    CountdownModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule
  ],
  entryComponents:[DialogInputPassComponent, DialogJoinRoomComponent,QuanlibaihocComponent,DialogComponent],
  providers: [authInterceptorProviders, Title],
  bootstrap: [AppComponent],

})
export class AppModule { }
