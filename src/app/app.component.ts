import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { EbirdApiService } from './ebird-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ebird-xlsx';
  constructor(private api: EbirdApiService, private router: Router) {}
  ngOnInit(): void {
    if (this.api.check_token() === false) {
      this.router.navigate(['/setToken']);
    }
  }
}
