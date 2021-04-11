import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {ListtestjlptComponent} from './usertest/listtestjlpt/listtestjlpt.component';
import {StarttestjlptComponent} from './usertest/starttestjlpt/starttestjlpt.component';
import {TestjlptComponent} from './usertest/testjlpt/testjlpt.component';
import {EndtestjlptComponent} from './usertest/endtestjlpt/endtestjlpt.component';
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
import {AdduserComponent} from "../Manh/adduser/adduser.component";
import {ManageruserComponent} from "../Manh/manageruser/manageruser.component";
import {DetailuserComponent} from "../Manh/detailuser/detailuser.component";
import {ListchallengeComponent} from './challenge/listchallenge/listchallenge.component';
import {LoginComponent} from '../Hien/login/login.component';
import {RegistrationComponent} from '../Hien/registration/registration.component';
import {CreateroomComponent} from './challenge/createroom/createroom.component';
import {HomeadminComponent} from './admin/homeadmin/homeadmin.component';
import {QuanlibaihocComponent} from '../Thuan/quanlibaihoc/quanlibaihoc.component';
import {AddlessonComponent} from '../Thuan/quanlibaihoc/addlesson/addlesson.component';
import {EditbaihocComponent} from '../Thuan/quanlibaihoc/editbaihoc/editbaihoc.component';
import {ManagerlistquestionComponent} from './admin/managerquestion/managerlistquestion/managerlistquestion.component';
import {ManageraddquestionfortestComponent} from './admin/managertest/manageraddquestionfortest/manageraddquestionfortest.component';
import {ManageraddquestionComponent} from './admin/managerquestion/manageraddquestion/manageraddquestion.component';
import {ManagertestComponent} from './admin/managertest/managertest.component';
import {ManagerlisttestComponent} from './admin/managertest/managerlisttest/managerlisttest.component';
import {ManageraddtestComponent} from './admin/managertest/manageraddtest/manageraddtest.component';
import {ManagerexamComponent} from './admin/managerexam/managerexam.component';
import {ManagerexamaddComponent} from './admin/managerexam/managerexamadd/managerexamadd.component';
import {ManagerexameditComponent} from './admin/managerexam/managerexamedit/managerexamedit.component';
import {ListquestionComponent} from '../Hien/listquestion/listquestion.component';
import {AddquestionComponent} from '../Hien/addquestion/addquestion.component';


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
  {path: 'admin/manage/user/detail/:id', component: DetailuserComponent},
  {path: 'listchalenge', component: ListchallengeComponent},
  {path: 'challenge/add', component: CreateroomComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'admin-home', component: HomeadminComponent},
  {path: 'admin/lesson', component: QuanlibaihocComponent},
  {path: 'admin/lesson/add', component: AddlessonComponent},
  {path: 'admin/lesson/edit', component: EditbaihocComponent},
  {path: 'admin/exam', component: ManagerexamComponent},
  {path: 'admin/exam/add', component: ManagerexamaddComponent},
  {path: 'admin/exam/edit', component: ManagerexameditComponent},
  {path: 'admin/question', component: ListquestionComponent},
  {path: 'admin/question/add', component: AddquestionComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ManagerRoutingModule { }
