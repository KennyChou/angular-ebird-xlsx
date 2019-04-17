import { Component, OnInit } from '@angular/core';
import { EbirdApiService } from '../ebird-api.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-get-token',
  templateUrl: './get-token.component.html',
  styleUrls: ['./get-token.component.scss']
})
export class GetTokenComponent implements OnInit {
  testkey = false;
  tokenkey = '';
  constructor(
    private api: EbirdApiService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}
  ontest() {
    this.api.test_locInfo(this.tokenkey).subscribe(
      ret => {
        this.testkey = true;
        this.api.setToken(this.tokenkey);
        this.snackBar.open('Token 正確, 請按下一步', '成功', {
          duration: 2000
        });
      },
      err => {
        this.testkey = false;
        this.snackBar.open('Token有問題, 無法使用eBird API!', '錯誤', {
          duration: 2000
        });
      }
    );
  }
  onstart() {
    this.router.navigate(['/']);
  }
}
