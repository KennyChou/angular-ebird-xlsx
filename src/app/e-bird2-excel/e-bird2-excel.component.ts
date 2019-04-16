import { Component, OnInit } from '@angular/core';
import { EbirdApiService } from '../ebird-api.service';
import { QUERYDATA, OBSBIRD, CHECKLIST, HOTSPOT } from '../e-bird';
import { EBIRDS } from '../ebirds';

@Component({
  selector: 'app-e-bird2-excel',
  templateUrl: './e-bird2-excel.component.html',
  styleUrls: ['./e-bird2-excel.component.scss']
})
export class EBird2ExcelComponent implements OnInit {
  sid = 'S51373042';
  query: QUERYDATA[] = [];
  ebirdlist = EBIRDS;
  constructor(private api: EbirdApiService) {}

  ngOnInit() {}
  add() {
    console.log(this.sid);
    this.api.get_checklist(this.sid).subscribe((ret: CHECKLIST) => {
      console.log(ret);
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
    });
  }
}
