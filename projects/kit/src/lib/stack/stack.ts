import { Signal, signal } from '@angular/core';
import { filter, Subject } from 'rxjs';

export interface DispatchType<T> {
  source: T;
  command: string;
  params?: unknown;
}

/**
 * the primary usage of this class is to communicate between child
 * and parent components, for example like accordion, accordion-items
 */
export abstract class STACK<T, K> {
  private _items = signal<T[]>([]);

  items = this._items.asReadonly();

  private _host = signal<K | undefined>(undefined);

  host = this._host.asReadonly() as Signal<K>;

  private _dispatcher = new Subject<DispatchType<T>>();

  setHost(host: K) {
    this._host.set(host);
  }

  add(item: T) {
    this._items.update((items) => [...items, item]);
  }

  remove(item: T) {
    this._items.update((items) => items.filter((i) => i !== item));
  }

  protected dispatch(item: T, options: DispatchType<T>) {
    this._dispatcher.next({ ...options, source: item });
  }

  protected listen(command: string) {
    return this._dispatcher.pipe(filter((i) => i.command === command));
  }
}
