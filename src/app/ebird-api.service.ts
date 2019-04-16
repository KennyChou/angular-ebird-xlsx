import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EbirdApiService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'X-eBirdApiToken': 'ba5ifpieofc6'
    })
  };

  get_checklist<observable>(sid: string) {
    // return this.http.get(`/ws2.0/product/checklist/view/${sid}`, this.httpOptions);
    return this.http.get(
      `https://ebird.org/ws2.0/product/checklist/view/${sid}`,
      this.httpOptions
    );
  }
  get_loc<observable>(locId: string) {
    return this.http.get(
      `https://ebird.org/ws2.0/ref/hotspot/info/${locId}`,
      this.httpOptions
    );
  }
}
