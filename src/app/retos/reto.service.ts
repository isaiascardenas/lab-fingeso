import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Reto } from './reto';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class RetoService {

  // private retosUrl = 'api/ideas';  // URL to web api
  private retosUrl = 'http://localhost:3000/retos';  // URL to web api

  constructor(private http: HttpClient) { }


  /** GET: /ideas => index */
  index(): Observable<Reto[]> {
    return this.http.get<Reto[]>(this.retosUrl)
      .pipe(
        tap(ideas => this.log('fetched ideas')),
        catchError(this.handleError('getRetos', []))
      );
  }

  /** GET /ideas/:id => show */
  get(id: number): Observable<Reto> {
    const url = `${this.retosUrl}/${id}`;
    return this.http.get<Reto>(url)
      .pipe(
        tap(_ => this.log(`fetched idea id=${id}`)),
        catchError(this.handleError<Reto>(`getReto id=${id}`))
      );
  }

  /* GET /ideas => index */
  search(term: string): Observable<Reto[]> {
    if (!term.trim()) {
      // if not search term, return empty idea array.
      return of([]);
    }
    return this.http.get<Reto[]>(`${this.retosUrl}/?name=${term}`)
      .pipe(
        tap(_ => this.log(`found ideas matching "${term}"`)),
        catchError(this.handleError<Reto[]>('searchRetos', []))
      );
  }

  /* POST: /ideas => store */
  store(idea: Reto): Observable<Reto> {
    return this.http.post<Reto>(this.retosUrl, idea, httpOptions).pipe(
      tap((idea: Reto) => this.log(`added idea w/ id=${idea.id}`)),
      catchError(this.handleError<Reto>('addReto'))
    );
  }

  /* POST: /ideas/:id/upvote */
  upvote(id: number): Observable<Reto> {
    console.log("/ideas/"+id+"/upvote");
    const url = `${this.retosUrl}/${id}/upvote`;
    return this.http.post<Reto>(url, httpOptions).pipe(
      tap((idea: Reto) => this.log(`upvote idea w/ id=${idea.id}`)),
      catchError(this.handleError<Reto>('addReto'))
    );
  }

  /* POST: /ideas/:id/downvote */
  downvote(id: number): void {
    console.log("/ideas/"+id+"/downvote"); 
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a RetoService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`RetoService: ${message}`);
    console.log(`RetoService: ${message}`);
  }
}
