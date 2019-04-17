import { Component, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { ExcelService } from '../excel-service.service';

@Component({
  selector: 'app-export-bottom-sheet',
  templateUrl: './export-bottom-sheet.component.html',
  styleUrls: ['./export-bottom-sheet.component.scss']
})
export class ExportBottomSheetComponent {
  constructor(
    private excel: ExcelService,
    private bottomSheetRef: MatBottomSheetRef<ExportBottomSheetComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {}

  openLink(event: MouseEvent, $type: number): void {
    console.log($type);
    if ($type === 0) {
      this.excel.exportAsPage(this.data);
    } else if ($type === 1) {
      this.excel.exportAsAll(this.data, 'xlsx');
    } else if ($type === 2) {
      this.excel.exportAsAll(this.data, 'csv');
    }
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
