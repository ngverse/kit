import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'doc-doc-page',
  templateUrl: './doc-page.component.html',
  styleUrl: './doc-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocPageComponent {
  sections = ['Overview', 'API', 'Examples'];
  activeSection = signal(this.sections[0]);
  name = input.required<string>();
  description = input.required<string>();

  showExamples = input(false);

  filteredSections = computed(() => {
    if (this.showExamples()) {
      return this.sections;
    }
    return this.sections.slice(0, 2);
  });

  setSection(section: string) {
    this.activeSection.set(section);
  }
}
