import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ManagerlessonComponent } from './admin/managerlesson/managerlesson.component';
import { ManagervocabularyComponent } from './admin/managervocabulary/managervocabulary.component';
import { ManagergrammarComponent } from './admin/managergrammar/managergrammar.component';
import { ManageruserComponent } from './admin/manageruser/manageruser.component';
import { ManagertestComponent } from './admin/managertest/managertest.component';
import { HeaderComponent } from './user/header/header.component';
import { FooterComponent } from './user/footer/footer.component';
import { VocabularyComponent } from './user/vocabulary/vocabulary.component';
import { GrammarComponent } from './user/grammar/grammar.component';
import { ReviewgrammarComponent } from './user/reviewgrammar/reviewgrammar.component';
import { ReviewvocabularyComponent } from './user/reviewvocabulary/reviewvocabulary.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { TestComponent } from './user/test/test.component';
import { StarttestComponent } from './user/starttest/starttest.component';
import { ListtestComponent } from './user/listtest/listtest.component';
import { ListroomComponent } from './user/listroom/listroom.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import { CompetitionComponent } from './user/competition/competition.component';
import { WaitroomComponent } from './user/waitroom/waitroom.component';
import { ChallengetogetgerComponent } from './user/challengetogetger/challengetogetger.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    ManagerlessonComponent,
    ManagervocabularyComponent,
    ManagergrammarComponent,
    ManageruserComponent,
    ManagertestComponent,
    HeaderComponent,
    FooterComponent,
    VocabularyComponent,
    GrammarComponent,
    ReviewgrammarComponent,
    ReviewvocabularyComponent,
    LoginComponent,
    RegistrationComponent,
    TestComponent,
    StarttestComponent,
    ListtestComponent,
    ListroomComponent,
    HomepageComponent,
    CompetitionComponent,
    WaitroomComponent,
    ChallengetogetgerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
