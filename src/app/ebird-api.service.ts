import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class EbirdApiService {
  constructor(private http: HttpClient, private cookie: CookieService) {}
  httpOptions = {
    headers: new HttpHeaders({
      'X-eBirdApiToken': '23abgao7v09b'
      //'X-eBirdApiToken': ''
    })
  };
  ebirdurl='https://api.ebird.org/v2'

  check_token(): boolean {
    const token = this.cookie.get('ebir// ApiToken');
    if (token) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'X-eBirdApiToken': token
        })
      };
    }
    return token !== undefined;
  }
  setToken(token) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'X-eBirdApiToken': token
      })
    };
    this.cookie.put('ebirdApiToken', token);
  }

  get_checklist<observable>(sid: string) {
    // return this.http.get(`/ws2.0/product/checklist/view/${sid}`, this.httpOptions);
    return this.http.get(
      `${this.ebirdurl}/product/checklist/view/${sid}`,
      this.httpOptions
    );
  }
  get_loc<observable>(locId: string) {
    return this.http.get(
      `${this.ebirdurl}/ref/hotspot/info/${locId}`,
      this.httpOptions
    );
  }

  test_locInfo<observable>(token: string) {
    const testheader = {
      headers: new HttpHeaders({
        'X-eBirdApiToken': token
      })
    };
    return this.http.get(
      // 'https://ebird.org/ws2.0/ref/hotspot/info/L3949628',
      '${this.ebirdurl}/product/checklist/view/S54929861',
      testheader
    );
  }
}
