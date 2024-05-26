import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './components/cv/cv.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioPhotosComponent } from './components/portfolio-photos/portfolio-photos.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'CV', component: CvComponent },
  { path: 'Photos', component: PortfolioPhotosComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
