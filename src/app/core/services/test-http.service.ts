import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreApiService } from './core-api.service';

@Injectable({
  providedIn: 'root'
})
export class TestHttpService extends CoreApiService {

  constructor(protected override http: HttpClient) {
    super(http);
  }


  public test1(): Observable<any[]> {
    return this.get('buy');
  }

  public test2(): Observable<any[]> {
    return this.get('recommend');
  }
}
