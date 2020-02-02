import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './app-material.module';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { BottomFooterComponent } from './components/bottom-footer/bottom-footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,BrowserAnimationsModule, AppMaterialModule ],
  declarations: [ AppComponent, TopHeaderComponent, BottomFooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
