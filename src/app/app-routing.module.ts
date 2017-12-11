import {NgModule} from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {AboutComponent} from "./about/about.component";
import {EducationComponent} from "./education/education.component";
import {SkillsComponent} from "./skills/skills.component";

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'education', component: EducationComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '', component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
