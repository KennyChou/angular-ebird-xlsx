import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { QUERYDATA } from './e-bird';

const EXCEL_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

const CSV_TYPE = 'text/csv';
const CSV_EXTENSION = '.csv';

@Injectable()
export class ExcelService {
  constructor() {}

  public exportAsAll(queryset: QUERYDATA[], $type: XLSX.BookType): void {
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    const data = [];
    queryset.forEach(query => {
      query.birds.forEach(bird => {
        data.push({
          subId: query.subId,
          locId: query.locId,
          locName: query.locName,
          obsDt: query.obsDt,
          鳥種: bird.cname,
          數量: bird.qty
        });
      });
    });
    // console.log(data);

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, 'sheet1');
    const excelBuffer: any = XLSX.write(wb, {
      bookType: $type,
      type: 'array'
    });

    if ($type === 'xlsx') {
      this.saveAsExcelFile(excelBuffer);
    } else {
      this.saveAsCSVFile(excelBuffer);
    }
  }

  public exportAsPage(queryset: QUERYDATA[]): void {
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    queryset.forEach(query => {
      const data = [];
      query.birds.forEach(bird => {
        data.push({
          鳥種: bird.cname,
          數量: bird.qty
        });
      });
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(wb, ws, query.subId);
    });

    const excelBuffer: any = XLSX.write(wb, {
      bookType: 'xlsx',
      type: 'array'
    });
    this.saveAsExcelFile(excelBuffer);
  }

  private saveAsExcelFile(buffer: any): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(
      data,
      'ebird_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }
  private saveAsCSVFile(buffer: any): void {
    const data: Blob = new Blob([buffer], {
      type: CSV_TYPE
    });
    FileSaver.saveAs(
      data,
      'ebird_export_' + new Date().getTime() + CSV_EXTENSION
    );
  }
}
