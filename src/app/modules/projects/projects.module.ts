import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProjectsMaterialModule } from "./projects-material.module";
import { ProjectsRoutingModule } from "./projects-routing.module";

import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsMaterialModule,
    ProjectsRoutingModule
  ],
  declarations: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }