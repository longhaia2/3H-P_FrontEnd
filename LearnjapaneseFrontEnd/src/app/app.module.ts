import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuanlibaihocComponent } from './Thuan/quanlibaihoc/quanlibaihoc.component';
import { SidebarComponent } from './Thuan/sidebar/sidebar.component';
import { FooterComponent } from './Thuan/footer/footer.component';
import { DangnhapComponent } from './Thuan/dangnhap/dangnhap.component';
import { AddlessonComponent } from './Thuan/quanlibaihoc/addlesson/addlesson.component';
import { EditbaihocComponent } from './Thuan/quanlibaihoc/editbaihoc/editbaihoc.component';


@NgModule({
  declarations: [
    AppComponent,
    QuanlibaihocComponent,
    SidebarComponent,
    FooterComponent,
    DangnhapComponent,
    AddlessonComponent,
    EditbaihocComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
