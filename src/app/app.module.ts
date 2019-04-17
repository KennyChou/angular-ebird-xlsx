import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedMaterialModule } from './shared-material/shared-material.module';
import { GetTokenComponent } from './get-token/get-token.component';
import { EBird2ExcelComponent } from './e-bird2-excel/e-bird2-excel.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExportBottomSheetComponent } from './export-bottom-sheet/export-bottom-sheet.component';
import { ExcelService } from './excel-service.service';
import { CookieModule } from 'ngx-cookie';

@NgModule({
  declarations: [
    AppComponent,
    GetTokenComponent,
    EBird2ExcelComponent,
    ExportBottomSheetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    SharedMaterialModule,
    FlexLayoutModule,
    CookieModule.forRoot()
  ],
  entryComponents: [ExportBottomSheetComponent],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule {}
