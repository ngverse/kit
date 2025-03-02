import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  ChangeDetectionStrategy,
  Component,
  DebugElement,
  provideExperimentalZonelessChangeDetection,
  signal,
} from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SwitchComponent } from './switch.component';

describe('SwitchComponent', () => {
  let fixture: ComponentFixture<SwitchTestComponent>;
  let debugElement: DebugElement;
  let rootComponent: SwitchTestComponent;
  let switchComponent: SwitchComponent;
  let switchElement: HTMLElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [SwitchComponent],
      providers: [provideExperimentalZonelessChangeDetection()],
    });
    fixture = TestBed.createComponent(SwitchTestComponent);
    await fixture.whenStable();

    debugElement = fixture.debugElement;
    rootComponent = fixture.componentInstance;
    switchComponent = debugElement.query(By.directive(SwitchComponent))
      .componentInstance as SwitchComponent;
    switchElement = debugElement.query(
      By.directive(SwitchComponent)
    ).nativeElement;
  });

  it('should create', () => {
    expect(switchComponent).toBeTruthy();
  });
  it('should disable switch with disable true', async () => {
    switchComponent.disabled.set(true);
    await fixture.whenStable();
    expect(switchElement.classList).toContain('disabled');
  });

  it('switch should be invalid with formControl required', async () => {
    rootComponent.formControl.setValidators(Validators.required);
    rootComponent.formControl.setValue(null);
    await fixture.whenStable();
    expect(switchElement).toHaveClass('ng-invalid');
  });
  it('switch should be invalid with required true', async () => {
    rootComponent.required.set(true);
    await fixture.whenStable();
    expect(switchElement).toHaveClass('ng-invalid');
  });

  it("ng-content should be 'Test switch'", async () => {
    await fixture.whenStable();
    expect(switchElement.textContent?.trim()).toBe('Test switch');
  });

  it('reverse should change label and toggle alignment', async () => {
    rootComponent.labelAlign.set('start');
    await fixture.whenStable();
    expect(switchElement.classList).toContain('start');
  });
});

@Component({
  imports: [SwitchComponent, ReactiveFormsModule],
  template: `<app-switch
    [labelAlign]="labelAlign()"
    [required]="required"
    [formControl]="formControl"
  >
    Test switch
  </app-switch>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class SwitchTestComponent {
  labelAlign = signal<'start' | 'end'>('end');
  formControl = new FormControl();
  required = signal(false);
}
