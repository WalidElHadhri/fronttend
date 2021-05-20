import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/product.model';
import { environment } from 'src/environments/environment';
import { createRequestOption } from './utils';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(req: any): Observable<any> {
    const option = createRequestOption(req);
    return this.http.get(environment.baseUrl + 'api/products', {params: option});
  }

  getAllByCategory(id: string, req): Observable<any> {
    const option = createRequestOption(req);
    return this.http.get(environment.baseUrl + 'api/products-by-category/' + id, {params: option});
  }

  getProductDetail(id: string): Observable<IProduct> {
    return this.http.get(environment.baseUrl + 'api/product/' + id);
  }



}
