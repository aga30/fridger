import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export abstract class CoreApiService {

  constructor(protected http: HttpClient) { }

  /**
   * Generic Get method, will return single element of type T.
   *
   * @param slug - Slug for requested resource.
   * @param params - params for requested resource.
   */
  protected get<T>(slug: string, params = {}): Observable<T> {
    return this.http.get<T>(`${environment.webServiceAddress}${slug}`, { params });
  }

  /**
   * Post method.
   *
   * @param slug - Slug for requested resource.
   * @param data - Body for requested resource.
   */
  protected post<T>(slug: string, data: object = {}): Observable<T> {
    return this.http.post<T>(`${environment.webServiceAddress}${slug}`, data);
  }

  /**
   * Generic Put method.
   *
   * @param slug - Slug for requested resource.
   * @param body - Body for requested resource
   */
  protected put<T>(slug: string, body: object = {}): Observable<any> {
    return this.http.put<T>(`${environment.webServiceAddress}${slug}`, body);
  }

  /**
   * Generic Patch method.
   *
   * @param slug - Slug for requested resource.
   * @param body - Body for requested resource
   */
  protected patch<T>(slug: string, body: object = {}): Observable<T> {
    return this.http.patch<T>(`${environment.webServiceAddress}${slug}`, body);
  }

  /**
   * Generic Delete method.
   *
   * @param slug - SLug for requested resource.
   */
  protected delete<T>(slug: string): Observable<any> {
    return this.http.delete(`${environment.webServiceAddress}${slug}`);
  }
}
