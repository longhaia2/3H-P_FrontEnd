import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {ListtestjlptComponent} from './usertest/listtestjlpt/listtestjlpt.component';
import {StarttestjlptComponent} from './usertest/starttestjlpt/starttestjlpt.component';
import {TestjlptComponent} from './usertest/testjlpt/testjlpt.component';
import {TestN1Component} from './usertest/test-n1/test-n1.component';
import {TestN2Component} from './usertest/test-n2/test-n2.component';
import {TestN3Component} from './usertest/test-n3/test-n3.component';
import {TestN4Component} from './usertest/test-n4/test-n4.component';
import {TestN5Component} from './usertest/test-n5/test-n5.component';
import {StudyN1Component} from './study/study-n1/study-n1.component';
import {StudyN2Component} from './study/study-n2/study-n2.component';
import {StudyN3Component} from './study/study-n3/study-n3.component';
import {StudyN4Component} from './study/study-n4/study-n4.component';
import {StudyN5Component} from './study/study-n5/study-n5.component';
import {StudyAlphabetComponent} from './study/study-alphabet/study-alphabet.component';
import {StudyKanjiComponent} from './study/study-kanji/study-kanji.component';
import {InformationComponent} from './information/information.component';
import {AdduserComponent} from '../Manh/adduser/adduser.component';
import {ManageruserComponent} from '../Manh/manageruser/manageruser.component';
import {DetailuserComponent} from '../Manh/detailuser/detailuser.component';
import {ListchallengeComponent} from './challenge/listchallenge/listchallenge.component';
import {CreateroomComponent} from './challenge/createroom/createroom.component';
import {HomeadminComponent} from './admin/homeadmin/homeadmin.component';
import {QuanlibaihocComponent} from '../Thuan/quanlibaihoc/quanlibaihoc.component';
import {AddlessonComponent} from '../Thuan/quanlibaihoc/addlesson/addlesson.component';
import {EditbaihocComponent} from '../Thuan/quanlibaihoc/editbaihoc/editbaihoc.component';
import {DetailComponent} from '../Thuan/quanlibaihoc/detail/detail.component';
import {ManagerexamComponent} from './admin/managerexam/managerexam.component';
import {ManagerexamaddComponent} from './admin/managerexam/managerexamadd/managerexamadd.component';
import {ListquestionComponent} from '../Hien/listquestion/listquestion.component';
import {AddquestionComponent} from '../Hien/addquestion/addquestion.component';
import {LoginComponent} from '../_services/login/login.component';
import {RegisterComponent} from '../_services/register/register.component';
import {WaitlchallengeComponent} from './challenge/waitlchallenge/waitlchallenge.component';
import {ManagerexamupdateComponent} from "./admin/managerexam/managerexamupdate/managerexamupdate.component";
import {ProfileComponent} from "../Manh/profile/profile.component";
import {HomeTvn1Component} from "./study/study-n1/home-tvn1/home-tvn1.component";
import {N1TuvungComponent} from "./study/study-n1/n1-tuvung/n1-tuvung.component";
import {HomeNpn1Component} from "./study/study-n1/home-npn1/home-npn1.component";
import {N1NguphapComponent} from "./study/study-n1/n1-nguphap/n1-nguphap.component";
import {N5TuvungComponent} from "./study/study-n5/n5-tuvung/n5-tuvung.component";
import {N5NguphapComponent} from "./study/study-n5/n5-nguphap/n5-nguphap.component";
import {N4TuvungComponent} from "./study/study-n4/n4-tuvung/n4-tuvung.component";
import {N4NguphapComponent} from "./study/study-n4/n4-nguphap/n4-nguphap.component";
import {N3NguphapComponent} from "./study/study-n3/n3-nguphap/n3-nguphap.component";
import {N2TuvungComponent} from "./study/study-n2/n2-tuvung/n2-tuvung.component";
import {N2NguphapComponent} from "./study/study-n2/n2-nguphap/n2-nguphap.component";
import {ChitietlessonComponent} from "../Thuan/chitietlesson/chitietlesson.component";
import {N3TuvungComponent} from "./study/study-n3/n3-tuvung/n3-tuvung.component";


// @ts-ignore
// @ts-ignore
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'page-home'},
  {path: 'page-home', component: HomepageComponent},
  {path: 'page-test', component: ListtestjlptComponent},
  {path: 'start-test', component: StarttestjlptComponent},
  {path: 'test', component: TestjlptComponent},
  {path: 'test/N1', component: TestN1Component},
  {path: 'test/N2', component: TestN2Component},
  {path: 'test/N3', component: TestN3Component},
  {path: 'test/N4', component: TestN4Component},
  {path: 'test/N5', component: TestN5Component},
  {path: 'study/N1', component: StudyN1Component},
  {path: 'study/N2', component: StudyN2Component},
  {path: 'study/N3', component: StudyN3Component},
  {path: 'study/N4', component: StudyN4Component},
  {path: 'study/N5', component: StudyN5Component},
  {path: 'study/alphabet', component: StudyAlphabetComponent},
  {path: 'study/kanji', component: StudyKanjiComponent},
  {path: 'infor', component: InformationComponent},
  {path: 'admin/manage/user/add', component: AdduserComponent},
  {path: 'admin/manage/user', component: ManageruserComponent},
  {path: 'admin/user/detail/:id', component: DetailuserComponent},
  {path: 'listchalenge', component: ListchallengeComponent},
  {path: 'challenge/add', component: CreateroomComponent},
  {path: 'challenge/wait/:id', component: WaitlchallengeComponent},
  {path: 'admin-home', component: HomeadminComponent},
  {path: 'admin/lesson', component: QuanlibaihocComponent},
  {path: 'admin/lesson/detail/:id', component: DetailComponent},
  {path: 'admin/lesson/add', component: AddlessonComponent},
  {path: 'admin/lesson/edit/:id', component: EditbaihocComponent},
  {path: 'admin/lesson/edit', component: EditbaihocComponent},
  {path: 'admin/exam', component: ManagerexamComponent},
  {path: 'admin/exam/add', component: ManagerexamaddComponent},
  {path: 'admin/question', component: ListquestionComponent},
  {path: 'admin/question/add', component: AddquestionComponent},
  {path: 'exam', component: StarttestjlptComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin/exam/edit/:id', component: ManagerexamupdateComponent},
  {path: 'admin/user/edit/:id', component: ProfileComponent},
  {path: 'study/N1/tuvung', component: N1TuvungComponent},
  {path: 'study/N1/nguphap', component: N1NguphapComponent},
  {path: 'study/:level/tuvung/:lesson/:id', component: HomeTvn1Component},
  {path: 'study/:level/nguphap/:lesson/:id', component: HomeNpn1Component},
  {path: 'study/N5/tuvung', component: N5TuvungComponent},
  {path: 'study/N5/nguphap', component: N5NguphapComponent},
  {path: 'study/:level/tuvung/:lesson/:id', component: HomeTvn1Component},
  {path: 'study/:level/nguphap/:lesson/:id', component: HomeNpn1Component},
  {path: 'study/N4/tuvung', component: N4TuvungComponent},
  {path: 'study/N4/nguphap', component: N4NguphapComponent},
  {path: 'study/:level/tuvung/:lesson/:id', component: HomeTvn1Component},
  {path: 'study/:level/nguphap/:lesson/:id', component: HomeNpn1Component},
  {path: 'study/N3/tuvung', component: N3TuvungComponent},
  {path: 'study/N3/nguphap', component: N3NguphapComponent},
  {path: 'study/:level/tuvung/:lesson/:id', component: HomeTvn1Component},
  {path: 'study/:level/nguphap/:lesson/:id', component: HomeNpn1Component},
  {path: 'study/N2/tuvung', component: N2TuvungComponent},
  {path: 'study/N2/nguphap', component: N2NguphapComponent},
  {path: 'study/:level/tuvung/:lesson/:id', component: HomeTvn1Component},
  {path: 'study/:level/nguphap/:lesson/:id', component: HomeNpn1Component},
  {path: 'home/lesson/chitietlesson/:id', component: ChitietlessonComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ManagerRoutingModule { }
