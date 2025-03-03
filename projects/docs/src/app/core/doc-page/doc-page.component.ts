import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ApiSectionComponent } from './api-section/api-section.component';
import { ApiSection } from './doc-page.types';

@Component({
  selector: 'doc-doc-page',
  templateUrl: './doc-page.component.html',
  styleUrl: './doc-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ApiSectionComponent],
})
export class DocPageComponent {
  name = input.required<string>();
  description = input.required<string>();
  api = input.required<ApiSection>();
}
