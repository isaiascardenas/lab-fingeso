import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Comentario } from './comentario';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ComentarioService {

  private comentariosUrl = 'api/comentarios';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  /* POST: /comentarios/create => store */
  store(comentario: Comentario): Observable<Comentario> {
    return this.http.post<Comentario>(this.comentariosUrl, comentario, httpOptions).pipe(
      tap((comentario: Comentario) => this.log(`added comentario w/ id=${comentario.id}`)),
      catchError(this.handleError<Comentario>('addIdea'))
    );
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

  /** Log a ComentarioService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`ComentarioService: ${message}`);
    console.log(`ComentarioService: ${message}`);
  }
}
