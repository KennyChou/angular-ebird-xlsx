import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { GetTokenComponent } from './get-token/get-token.component';
import { EBird2ExcelComponent } from './e-bird2-excel/e-bird2-excel.component';

@NgModule({
  declarations: [
    AppComponent,
    GetTokenComponent,
    EBird2ExcelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
