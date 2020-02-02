import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeMaterialModule } from "./home-material.module";
import { HomeRoutingModule } from "./home-routing.module";

import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeMaterialModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }