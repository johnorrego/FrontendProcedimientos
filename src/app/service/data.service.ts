
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getCategoria(): Observable<any> {
    return this.http.get('http://localhost:8000/api/categorias');
  }

  saveCategoria(categoria: Categoria): Observable<any> {
    return this.http.post('http://localhost:8000/api/categorias', categoria, { headers: this.createRequestHeader() });
  }

  editCategoria(categoria: Categoria): Observable<any> {
    return this.http.put('http://localhost:8000/api/categorias/' + categoria.id, categoria, { headers: this.createRequestHeader() });
  }

  deleteCategoria(categoria: Categoria): Observable<any> {
    return this.http.delete('http://localhost:8000/api/categorias/' + categoria.id, { headers: this.createRequestHeader() });
  }

  getCategoriaId(categoria: Categoria): Observable<any> {
    return this.http.get('http://localhost:8000/api/categorias/' + categoria, { headers: this.createRequestHeader() });
  }


  private createRequestHeader() {
    return new HttpHeaders({
      "Content-Type": "application/json",
    });
  }
}
