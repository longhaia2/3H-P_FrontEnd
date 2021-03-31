import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrangchuComponent } from './Nguoidung/trangchu/trangchu.component';
import { HeaderComponent } from './Nguoidung/header/header.component';
import { FooterComponent } from './Nguoidung/footer/footer.component';
import { ThachdaucungnhauComponent } from './Nguoidung/thachdaucungnhau/thachdaucungnhau.component';
import { TaophongthidauComponent } from './Nguoidung/taophongthidau/taophongthidau.component';
import { DanhsachphongComponent } from './Nguoidung/danhsachphong/danhsachphong.component';
import { PhongdoiComponent } from './Nguoidung/phongdoi/phongdoi.component';
import { ThidauComponent } from './Nguoidung/thidau/thidau.component';
import { HocnguphapComponent } from './Nguoidung/hocnguphap/hocnguphap.component';
import { HoctuvungComponent } from './Nguoidung/hoctuvung/hoctuvung.component';
import { BaitapnguphapComponent } from './Nguoidung/baitapnguphap/baitapnguphap.component';
import { BaitaptuvungComponent } from './Nguoidung/baitaptuvung/baitaptuvung.component';
import { ChonbaituvungComponent } from './Nguoidung/chonbaituvung/chonbaituvung.component';
import { DangnhapComponent } from './Admin/dangnhap/dangnhap.component';
import { QuanlybaihocComponent } from './Admin/quanlybaihoc/quanlybaihoc.component';
import { SuatuvungComponent } from './Admin/suatuvung/suatuvung.component';
import { ThemtuvungComponent } from './Admin/themtuvung/themtuvung.component';
import { XoatuvungComponent } from './Admin/xoatuvung/xoatuvung.component';
import { XemtuvungComponent } from './Admin/xemtuvung/xemtuvung.component';
import { QuanlythanhvienComponent } from './Admin/quanlythanhvien/quanlythanhvien.component';
import { LuyenthiComponent } from './Nguoidung/luyenthi/luyenthi.component';
import { BatdauthiComponent } from './Nguoidung/batdauthi/batdauthi.component';
import { PhongthithuComponent } from './Nguoidung/phongthithu/phongthithu.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    HeaderComponent,
    FooterComponent,
    ThachdaucungnhauComponent,
    TaophongthidauComponent,
    DanhsachphongComponent,
    PhongdoiComponent,
    ThidauComponent,
    HocnguphapComponent,
    HoctuvungComponent,
    BaitapnguphapComponent,
    BaitaptuvungComponent,
    ChonbaituvungComponent,
    DangnhapComponent,
    QuanlybaihocComponent,
    SuatuvungComponent,
    ThemtuvungComponent,
    XoatuvungComponent,
    XemtuvungComponent,
    QuanlythanhvienComponent,
    LuyenthiComponent,
    BatdauthiComponent,
    PhongthithuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
