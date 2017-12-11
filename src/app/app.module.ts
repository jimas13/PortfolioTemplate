import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
