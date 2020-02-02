import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsMaterialModule } from "./contact-us-material.module";
import { ContactUsRoutingModule } from "./contact-us-routing.module";

import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  imports: [
    CommonModule,
    ContactUsMaterialModule,
    ContactUsRoutingModule
  ],
  declarations: [ ContactUsComponent ]
})
export class ContactUsModule { }