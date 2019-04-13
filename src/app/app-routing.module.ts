import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EBird2ExcelComponent } from './e-bird2-excel/e-bird2-excel.component';

const routes: Routes = [
  {path: '', component: EBird2ExcelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
