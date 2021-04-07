import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VocabularyComponent } from './Hien/vocabulary/vocabulary.component';
import { GrammarComponent } from './Hien/grammar/grammar.component';
import { ReviewvocabularyComponent } from './Hien/reviewvocabulary/reviewvocabulary.component';
import { RegistrationComponent } from './Hien/registration/registration.component';
import { LoginComponent } from './Hien/login/login.component';
import { ReviewgrammarComponent } from './Hien/reviewgrammar/reviewgrammar.component';
import { HistoryComponent } from './Hien/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    VocabularyComponent,
    GrammarComponent,
    ReviewvocabularyComponent,
    RegistrationComponent,
    LoginComponent,
    ReviewgrammarComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
