import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {ListtestjlptComponent} from './usertest/listtestjlpt/listtestjlpt.component';
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
import {CompetitionComponent} from "./challenge/competition/competition.component";
import {EndcompetitionComponent} from "./challenge/endcompetition/endcompetition.component";
import {ReviewgrammarComponent} from "../Hien/reviewgrammar/reviewgrammar.component";
import {ReviewvocabularyComponent} from "../Hien/reviewvocabulary/reviewvocabulary.component";
import {N1TuvungComponent} from "./study/study-n1/n1-tuvung/n1-tuvung.component";
import {N1NguphapComponent} from "./study/study-n1/n1-nguphap/n1-nguphap.component";
import {HomeTvComponent} from "./study/home-tv/home-tv.component";
import {HomeNpComponent} from "./study/home-np/home-np.component";
import {N2TuvungComponent} from "./study/study-n2/n2-tuvung/n2-tuvung.component";
import {N2NguphapComponent} from "./study/study-n2/n2-nguphap/n2-nguphap.component";
import {N3TuvungComponent} from "./study/study-n3/n3-tuvung/n3-tuvung.component";
import {N3NguphapComponent} from "./study/study-n3/n3-nguphap/n3-nguphap.component";
import {N4TuvungComponent} from "./study/study-n4/n4-tuvung/n4-tuvung.component";
import {N4NguphapComponent} from "./study/study-n4/n4-nguphap/n4-nguphap.component";
import {N5TuvungComponent} from "./study/study-n5/n5-tuvung/n5-tuvung.component";
import {N5NguphapComponent} from "./study/study-n5/n5-nguphap/n5-nguphap.component";
import {ChitietlessonComponent} from "../Thuan/chitietlesson/chitietlesson.component";
import {ManagerexamupdateComponent} from "./admin/managerexam/managerexamupdate/managerexamupdate.component";
import {N1NguphapOntapComponent} from "./study/study-n1/n1-nguphap-ontap/n1-nguphap-ontap.component";
import {N1TuvungOntapComponent} from "./study/study-n1/n1-tuvung-ontap/n1-tuvung-ontap.component";
import {HomeOntapComponent} from "./study/home-ontap/home-ontap.component";
import {StarttestjnptN4Component} from "./starttestjnpt-n4/starttestjnpt-n4.component";
import {StarttestjnptN3Component} from "./starttestjnpt-n3/starttestjnpt-n3.component";
import {StarttestjnptN2Component} from "./starttestjnpt-n2/starttestjnpt-n2.component";
import {StarttestjnptN1Component} from "./starttestjnpt-n1/starttestjnpt-n1.component";
import {StarttestjlptComponent} from "./starttestjlpt/starttestjlpt.component";
import {ResultTestComponent} from '../Hien/result-test/result-test.component';
import {CustomerAuthService} from '../_services/customer-auth.service';
import {UnaccessComponent} from '../Hien/unaccess/unaccess.component';
import {ResultVocabularyComponent} from '../Hien/result-vocabulary/result-vocabulary.component';
import {AdminAuthService} from '../_services/admin-auth.service';
import {ProfileComponent} from "./profile/profile.component";
import {HistoryComponent} from '../Hien/history/history.component';
import {HistoryResultComponent} from '../Hien/history-result/history-result.component';
import {ManagerquestionComponent} from "./admin/managerquestion/managerquestion.component";
import { N2NguphapOntapComponent } from './study/study-n2/n2-nguphap-ontap/n2-nguphap-ontap.component';
import {N2TuvungOntapComponent} from "./study/study-n2/n2-tuvung-ontap/n2-tuvung-ontap.component";
import {N3NguphapOntapComponent} from "./study/study-n3/n3-nguphap-ontap/n3-nguphap-ontap.component";
import { N3TuvungOntapComponent } from './study/study-n3/n3-tuvung-ontap/n3-tuvung-ontap.component';
import {N4NguphapOntapComponent} from "./study/study-n4/n4-nguphap-ontap/n4-nguphap-ontap.component";
import {N4TuvungOntapComponent} from "./study/study-n4/n4-tuvung-ontap/n4-tuvung-ontap.component";
import {N5NguphapOntapComponent} from "./study/study-n5/n5-nguphap-ontap/n5-nguphap-ontap.component";
import {N5TuvungOntapComponent} from "./study/study-n5/n5-tuvung-ontap/n5-tuvung-ontap.component";




const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'page-home'},
  {path: 'page-home', component: HomepageComponent, data:{ title: 'Trang Chủ'}},
  {path: 'page-test', component: ListtestjlptComponent},
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
  {path: 'admin/manage/user/add', component: AdduserComponent, canActivate: [AdminAuthService]},
  {path: 'admin/manage/user', component: ManageruserComponent, canActivate: [AdminAuthService]},
  {path: 'admin/user/detail/:id', component: DetailuserComponent},
  {path: 'listchalenge', component: ListchallengeComponent, canActivate: [CustomerAuthService]},
  {path: 'challenge/add', component: CreateroomComponent, canActivate: [CustomerAuthService]},
  {path: 'challenge/wait/:id', component: WaitlchallengeComponent, canActivate: [CustomerAuthService]},
  {path: 'admin-home', component: HomeadminComponent},
  {path: 'admin/lesson', component: QuanlibaihocComponent, canActivate: [AdminAuthService]},
  {path: 'admin/lesson/detail/:id', component: DetailComponent, canActivate: [AdminAuthService]},
  {path: 'admin/lesson/add', component: AddlessonComponent, canActivate: [AdminAuthService]},
  {path: 'admin/lesson/edit/:id', component: EditbaihocComponent, canActivate: [AdminAuthService]},
  // {path: 'admin/lesson/edit', component: EditbaihocComponent, canActivate: [AdminAuthService]},
  {path: 'admin/exam', component: ManagerexamComponent, canActivate: [AdminAuthService]},
  {path: 'admin/exam/add', component: ManagerexamaddComponent, canActivate: [AdminAuthService]},
  {path: 'admin/exam/edit/:id', component: ManagerexamupdateComponent, canActivate: [AdminAuthService]},
  {path: 'admin/question', component: ListquestionComponent, canActivate: [AdminAuthService]},
  {path: 'admin/question/add', component: AddquestionComponent, canActivate: [AdminAuthService]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'question/:exam_id/challenge/:id/:id_room/:id_score', component: CompetitionComponent, canActivate: [CustomerAuthService]},
  {path: 'end', component: EndcompetitionComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'vocabulary/exam/list/:id', component: ReviewvocabularyComponent, canActivate: [CustomerAuthService]},
  {path: 'grammar/exam/list/:id', component: ReviewgrammarComponent, canActivate: [CustomerAuthService]},
  {path: 'study/N1/tuvung', component: N1TuvungComponent, canActivate: [CustomerAuthService]},
  {path: 'study/N1/nguphap', component: N1NguphapComponent, canActivate: [CustomerAuthService]},
  {path: 'study/:level/tuvung/:lesson/:id', component: HomeTvComponent, canActivate: [CustomerAuthService]},
  {path: 'study/:level/nguphap/:lesson/:id', component: HomeNpComponent, canActivate: [CustomerAuthService]},
  {path: 'study/N2/tuvung', component: N2TuvungComponent, canActivate: [CustomerAuthService]},
  {path: 'study/N2/nguphap', component: N2NguphapComponent, canActivate: [CustomerAuthService]},
  {path: 'study/:level/tuvung/:lesson/:id', component: HomeTvComponent, canActivate: [CustomerAuthService]},
  {path: 'study/:level/nguphap/:lesson/:id', component: HomeNpComponent, canActivate: [CustomerAuthService]},
  {path: 'study/N3/tuvung', component: N3TuvungComponent, canActivate: [CustomerAuthService]},
  {path: 'study/N3/nguphap', component: N3NguphapComponent, canActivate: [CustomerAuthService]},
  {path: 'study/:level/tuvung/:lesson/:id', component: HomeTvComponent, canActivate: [CustomerAuthService]},
  {path: 'study/:level/nguphap/:lesson/:id', component: HomeNpComponent, canActivate: [CustomerAuthService]},
  {path: 'study/N4/tuvung', component: N4TuvungComponent, canActivate: [CustomerAuthService]},
  {path: 'study/N4/nguphap', component: N4NguphapComponent, canActivate: [CustomerAuthService]},
  {path: 'study/:level/tuvung/:lesson/:id', component: HomeTvComponent, canActivate: [CustomerAuthService]},
  {path: 'study/:level/nguphap/:lesson/:id', component: HomeNpComponent, canActivate: [CustomerAuthService]},
  {path: 'study/N5/tuvung', component: N5TuvungComponent, canActivate: [CustomerAuthService]},
  {path: 'study/N5/nguphap', component: N5NguphapComponent, canActivate: [CustomerAuthService]},
  {path: 'study/:level/tuvung/:lesson/:id', component: HomeTvComponent, canActivate: [CustomerAuthService]},
  {path: 'study/:level/nguphap/:lesson/:id', component: HomeNpComponent, canActivate: [CustomerAuthService]},
  {path: 'home/lesson/chitietlesson/:id', component: ChitietlessonComponent, canActivate: [CustomerAuthService]},
  {path: 'study/N1/nguphap/ontap', component: N1NguphapOntapComponent, canActivate: [CustomerAuthService]},
  {path: 'study/N1/tuvung/ontap', component: N1TuvungOntapComponent, canActivate: [CustomerAuthService]},
  {path: 'study/N2/nguphap/ontap', component: N2NguphapOntapComponent, canActivate: [CustomerAuthService]},
  {path: 'study/N2/tuvung/ontap', component: N2TuvungOntapComponent, canActivate: [CustomerAuthService]},
  {path: 'study/N3/nguphap/ontap', component: N3NguphapOntapComponent, canActivate: [CustomerAuthService]},
  {path: 'study/N3/tuvung/ontap', component: N3TuvungOntapComponent, canActivate: [CustomerAuthService]},
  {path: 'study/N4/nguphap/ontap', component: N4NguphapOntapComponent, canActivate: [CustomerAuthService]},
  {path: 'study/N4/tuvung/ontap', component: N4TuvungOntapComponent, canActivate: [CustomerAuthService]},
  {path: 'study/N5/nguphap/ontap', component: N5NguphapOntapComponent, canActivate: [CustomerAuthService]},
  {path: 'study/N5/tuvung/ontap', component: N5TuvungOntapComponent, canActivate: [CustomerAuthService]},
  {path: 'study/:level/nguphap/ontap/:codeExam/:id', component: ReviewgrammarComponent, canActivate: [CustomerAuthService]},
  {path: 'study/:level/tuvung/ontap/:codeExam/:id', component: ReviewvocabularyComponent, canActivate: [CustomerAuthService]},
  {path: 'exam/N5/:id', component: StarttestjlptComponent, canActivate: [CustomerAuthService]},
  {path: 'exam/N4/:id', component: StarttestjnptN4Component, canActivate: [CustomerAuthService]},
  {path: 'exam/N3/:id', component: StarttestjnptN3Component, canActivate: [CustomerAuthService]},
  {path: 'exam/N2/:id', component: StarttestjnptN2Component, canActivate: [CustomerAuthService]},
  {path: 'exam/N1/:id', component: StarttestjnptN1Component, canActivate: [CustomerAuthService]},
  {path: 'exam/:level/testjnpt/:id', component: TestjlptComponent, canActivate: [CustomerAuthService]},
  {path: 'resultsgrammar/:id/:id_exam', component: ResultTestComponent, canActivate: [CustomerAuthService]},
  {path: 'resultsvocabulary/:id/:id_exam', component: ResultVocabularyComponent, canActivate: [CustomerAuthService]},
  {path: 'unaccess', component: UnaccessComponent},
  {path: 'profile/edit/:id', component: ProfileComponent},
  {path: 'score', component: HistoryResultComponent, canActivate: [CustomerAuthService]},
  {path: 'qs', component: ManagerquestionComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class ManagerRoutingModule { }
