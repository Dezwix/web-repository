import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressBarModule} from '@angular/material/progress-bar';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootSidenavComponent } from './root-sidenav/root-sidenav.component';
import { RootContentComponent } from './root-content/root-content.component';
import { HelloSectionComponent } from './hello-section/hello-section.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';

@NgModule({
  declarations: [
    AppComponent,
    RootSidenavComponent,
    RootContentComponent,
    HelloSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
