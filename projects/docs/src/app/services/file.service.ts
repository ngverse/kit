import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

export const EMPTY_FILE_TOKEN = 'Empty File';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  private http = inject(HttpClient);
  private _cache = new Map<string, string>();

  getFile(path: string) {
    if (this._cache.has(path)) {
      return of(this._cache.get(path) as string).pipe(delay(0));
    }
    return this.http
      .get(path, {
        responseType: 'text',
      })
      .pipe(
        map((response) => {
          if (!response) {
            return EMPTY_FILE_TOKEN;
          }
          return response;
        })
      )
      .pipe(
        tap((response) => {
          this._cache.set(path, response);
        })
      );
  }
}
