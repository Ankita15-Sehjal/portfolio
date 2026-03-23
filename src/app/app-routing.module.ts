import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home} from './pages/home/home';
import { About } from './pages/about/about';
import { ProjectsComponent } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: Contact }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}