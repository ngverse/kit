import {
  ChangeDetectionStrategy,
  Component,
  DebugElement,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { TabBodyDirective } from './tab-body.directive';
import { TabGroupComponent } from './tab-group.component';
import { TabHeaderDirective } from './tab-header.directive';
import { TabComponent } from './tab.component';

@Component({
  imports: [
    TabGroupComponent,
    TabComponent,
    TabHeaderDirective,
    TabBodyDirective,
  ],
  template: ` <doc-tab-group>
    <doc-tab label="Default"> This is default tab </doc-tab>
    <doc-tab>
      <ng-template appTabHeader>
        <div class="custom-label">Custom Label</div>
      </ng-template>
      This is Custom Label Tab
    </doc-tab>
    <doc-tab label="Lazy Load Body">
      <ng-template appTabBody>Lazy tab</ng-template>
    </doc-tab>
  </doc-tab-group>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TabGroupTestComponent {}

xdescribe('TabGroupComponent', () => {
  let fixture: ComponentFixture<TabGroupTestComponent>;
  let tabHeaders: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideExperimentalZonelessChangeDetection(),
        provideNoopAnimations(),
      ],
      imports: [TabGroupTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabGroupTestComponent);
    fixture.detectChanges();
    tabHeaders = fixture.debugElement.queryAll(By.css('.tab-header'));
  });

  it('should render custom label', () => {
    const secondTabHeader = tabHeaders[1];
    expect(secondTabHeader.query(By.css('.custom-label'))).toBeTruthy();
    expect(secondTabHeader.nativeElement.textContent).toContain('Custom Label');
  });

  it('should render default label and a body', () => {
    const firstTabHeader = tabHeaders[0];
    const firstTabBody = fixture.debugElement.query(By.css('.tab-body'));
    expect(firstTabHeader.nativeElement.textContent).toContain('Default');
    expect(firstTabBody.nativeElement.textContent).toContain(
      'This is default tab'
    );
  });

  it('should change active tab', () => {
    const secondTabHeader = tabHeaders[1];
    secondTabHeader.nativeElement.click();
    fixture.detectChanges();

    const activeTabBody = fixture.debugElement.query(By.css('.tab-body'));
    expect(activeTabBody.nativeElement.textContent.trim()).toContain(
      'This is Custom Label Tab'
    );
  });

  it('should render lazy tab', () => {
    const lazyTab = tabHeaders[2];
    expect(lazyTab.nativeElement.textContent).toContain('Lazy Load Body');
    lazyTab.nativeElement.click();
    fixture.detectChanges();

    const activeTabBody = fixture.debugElement.query(By.css('.tab-body'));
    expect(activeTabBody.nativeElement.textContent).toContain('Lazy tab');
  });
});
