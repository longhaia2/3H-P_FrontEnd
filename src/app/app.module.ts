import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuanlibaihocComponent } from './Thuan/quanlibaihoc/quanlibaihoc.component';
import { SidebarComponent } from './Thuan/sidebar/sidebar.component';
import { FooterComponent } from './Thuan/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    QuanlibaihocComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
