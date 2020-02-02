import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AboutUsMaterialModule } from "./about-us-material.module";
import { AboutUsRoutingModule } from "./about-us-routing.module";

import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  imports: [
    CommonModule,
    AboutUsMaterialModule,
    AboutUsRoutingModule
  ],
  declarations: [
    AboutUsComponent
  ]
})
export class AboutUsModule {}
