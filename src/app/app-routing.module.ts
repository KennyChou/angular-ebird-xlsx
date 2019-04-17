import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EBird2ExcelComponent } from './e-bird2-excel/e-bird2-excel.component';
import { GetTokenComponent } from './get-token/get-token.component';

const routes: Routes = [
  { path: '', component: EBird2ExcelComponent },
  { path: 'setToken', component: GetTokenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
