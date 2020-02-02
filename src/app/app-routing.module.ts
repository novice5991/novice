import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  { 
    path: 'about-us',
    loadChildren: () => import(`./modules/about-us/about-us.module`).then(m => m.AboutUsModule) 
  },
  { 
    path: 'contact-us',
    loadChildren: () => import(`./modules/contact-us/contact-us.module`).then(m => m.ContactUsModule) 
  },
  { 
    path: 'home',
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule) 
  },
  {
    path: 'projects',
    loadChildren: () => import(`./modules/projects/projects.module`).then(m => m.ProjectsModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }