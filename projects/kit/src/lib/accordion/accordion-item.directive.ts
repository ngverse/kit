import { _IdGenerator } from '@angular/cdk/a11y';
import {
  Directive,
  inject,
  model,
  OnDestroy,
  OnInit,
  output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { injectStack, provideNillStack } from '../stack/stack-providers';
import { ACCORDION_STACK } from './accordion-stack';

@Directive({
  selector: '[kitAccordionItem]',
  providers: [provideNillStack(ACCORDION_STACK)],
  exportAs: 'kitAccordionItem',
})
export class AccordionItemDirective implements OnDestroy, OnInit {
  readonly opened = output();
  readonly closed = output();

  private idGenerator = inject(_IdGenerator);
  private _stack = injectStack(ACCORDION_STACK);
  get accordion() {
    return this._stack.host();
  }
  readonly id = this.idGenerator.getId('kit-accordion-');
  panelId = this.idGenerator.getId('kit-accordion-panel-');
  titleId = this.idGenerator.getId('kit-accordion-title-');

  expanded = model<boolean>(false);
  sub: Subscription | undefined;

  constructor() {
    this._stack.add(this);
  }
  ngOnInit(): void {
    this.sub = this._stack.opened$.subscribe((data) => {
      if (!this.accordion.multi() && data.source !== this && this.expanded()) {
        this.close();
      }
    });
  }

  toggle() {
    if (this.expanded()) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.expanded.set(true);
    this._stack.opened(this);
    this.opened.emit();
  }

  close() {
    this.expanded.set(false);
    this.closed.emit();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this._stack.remove(this);
  }
}
