import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Idea } from './idea';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};

@Injectable({ providedIn: 'root' })
export class IdeaService {

  // private ideasUrl = 'api/ideas';  // URL to web api
  private ideasUrl = 'http://localhost:3000/ideas';  // URL to web api

  constructor(private http: HttpClient) { }


  /** GET: /ideas => index */
  index(): Observable<Idea[]> {
    return this.http.get<Idea[]>(this.ideasUrl)
      .pipe(
        tap(ideas => this.log('fetched ideas')),
        catchError(this.handleError('getIdeas', []))
      );
  }

  /** GET /ideas/:id => show */
  get(id: number): Observable<Idea> {
    const url = `${this.ideasUrl}/${id}`;
    return this.http.get<Idea>(url)
      .pipe(
        tap(_ => this.log(`fetched idea id=${id}`)),
        catchError(this.handleError<Idea>(`getIdea id=${id}`))
      );
  }

  /* GET /ideas => index */
  search(term: string): Observable<Idea[]> {
    if (!term.trim()) {
      // if not search term, return empty idea array.
      return of([]);
    }
    return this.http.get<Idea[]>(`${this.ideasUrl}/?name=${term}`)
      .pipe(
        tap(_ => this.log(`found ideas matching "${term}"`)),
        catchError(this.handleError<Idea[]>('searchIdeas', []))
      );
  }

  /* POST: /ideas => store */
  store(idea: Idea): Observable<Idea> {
    let storeUrl = `${this.ideasUrl}/create`;
    return this.http.post<Idea>(storeUrl, idea, httpOptions).pipe(
      tap((idea: Idea) => this.log(`added idea w/ id=${idea.id}`)),
      catchError(this.handleError<Idea>('addIdea'))
    );
  }

  /* POST: /ideas/:id/upvote */
  upvote(id: number): Observable<Idea> {
    console.log("/ideas/"+id+"/upvote");
    const url = `${this.ideasUrl}/${id}/upvote`;
    return this.http.post<Idea>(url, httpOptions).pipe(
      tap((idea: Idea) => this.log(`upvote idea w/ id=${idea.id}`)),
      catchError(this.handleError<Idea>('addIdea'))
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

  /** Log a IdeaService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`IdeaService: ${message}`);
    console.log(`IdeaService: ${message}`);
  }
}
