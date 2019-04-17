import { Component, OnInit } from '@angular/core';
import { EbirdApiService } from '../ebird-api.service';
import { QUERYDATA, OBSBIRD, CHECKLIST, HOTSPOT } from '../e-bird';
import { EBIRDS } from '../ebirds';
import { MatSnackBar, MatBottomSheet } from '@angular/material';
import { ExportBottomSheetComponent } from '../export-bottom-sheet/export-bottom-sheet.component';

@Component({
  selector: 'app-e-bird2-excel',
  templateUrl: './e-bird2-excel.component.html',
  styleUrls: ['./e-bird2-excel.component.scss']
})
export class EBird2ExcelComponent implements OnInit {
  sid = '';
  query: QUERYDATA[] = [];
  ebirdlist = EBIRDS;
  constructor(
    private api: EbirdApiService,
    private snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet
  ) {}

  ngOnInit() {}
  add() {
    // console.log(this.sid);
    this.api.get_checklist(this.sid).subscribe(
      (ret: CHECKLIST) => {
        const data = new QUERYDATA();
        data.subId = ret.subId;
        data.locId = ret.locId;
        data.userDisplayName = ret.userDisplayName;
        data.obsDt = ret.obsDt;
        data.birds = [];
        ret.obs.forEach(obs => {
          const bird = this.ebirdlist.find(
            item => item.speciesCode === obs.speciesCode
          );
          data.birds.push(
            new OBSBIRD(obs.speciesCode, bird.cname, obs.howManyAtleast)
          );
        });
        this.api.get_loc(data.locId).subscribe(
          (h: HOTSPOT) => {
            data.locName = h.name;
            this.query.push(data);
          },
          err => {
            data.locName = '私人熱點';
            this.query.push(data);
          }
        );
        this.sid = '';
      },
      err => {
        this.snackBar.open('eBird ID有問題, 找不到資料!', '錯誤', {
          duration: 2000
        });
      }
    );
  }
  remove($index) {
    this.query.splice($index, 1);
  }
  openBottomSheet(): void {
    this.bottomSheet.open(ExportBottomSheetComponent, { data: this.query });
  }
}
