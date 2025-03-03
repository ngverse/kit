import { Component, inject, input, signal } from '@angular/core';
import { FileService } from '../../../services/file.service';

@Component({
  selector: 'doc-show-case',
  templateUrl: './show-case.component.html',
  styleUrl: './show-case.component.css',
})
export class ShowCaseComponent {
  tabs = ['html', 'ts', 'css'];
  fileService = inject(FileService);
  code = signal<string>('');
  language = signal<string>('');
  name = input.required<string>();

  // tabChanged($event: number) {
  //   if ($event !== 0) {
  //     const extension = this.tabs[$event - 1];
  //     this.language.set(extension);
  //     this.fileService
  //       .getFile(
  //         `examples/${this.name()}/show-case-${this.name()}/show-case-${this.name()}.component.${extension}`
  //       )
  //       .subscribe((response) => {
  //         this.code.set(response);
  //       });
  //   }
  // }
}
