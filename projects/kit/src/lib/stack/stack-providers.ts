import { inject, Injector, Provider, Type } from '@angular/core';
import { STACK } from './stack';

/**
 * returns nill provider based on type
 * it is used to restrict parent access to the nested children
 * @param provideType type to provide
 * @returns provider
 */
export function provideNillStack<T>(provideType: Type<T>): Provider {
  return { provide: provideType, useValue: undefined };
}

export function injectStack<T>(stack: Type<T>) {
  return inject(stack, { skipSelf: true });
}

export function parentOrNewStack<T, K>(stack: new () => STACK<T, K>): Provider {
  return {
    provide: stack,
    useFactory: () => {
      const injector = inject(Injector, { skipSelf: true });
      const parentListboxState = injector.get(stack, null);
      return parentListboxState ?? new stack();
    },
  };
}
