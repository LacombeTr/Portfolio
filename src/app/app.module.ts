import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CvComponent } from './components/cv/cv.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioPhotosComponent } from './components/portfolio-photos/portfolio-photos.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LanguageChipsPipe } from './pipes/language-chips.pipe';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'CV', component: CvComponent },
  { path: 'Photos', component: PortfolioPhotosComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    HomeComponent,
    PortfolioPhotosComponent,
    ProjectsComponent,
    LanguageChipsPipe,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
