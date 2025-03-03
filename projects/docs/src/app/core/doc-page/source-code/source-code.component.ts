import { ClipboardModule } from '@angular/cdk/clipboard';
import { Component, computed, input, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { EMPTY_FILE_TOKEN } from '../../../services/file.service';
@Component({
  selector: 'doc-source-code',
  imports: [Highlight, ClipboardModule],
  templateUrl: './source-code.component.html',
  styleUrl: './source-code.component.css',
})
export class SourceCodeComponent {
  code = input.required<string>();
  language = input.required<string>();

  allowCopy = input(true);

  copied = signal(false);

  outline = input(true);

  surface = input(false);

  showCopy = computed(
    () => this.allowCopy() && !!this.code() && this.code() !== EMPTY_FILE_TOKEN
  );

  copy() {
    this.copied.set(true);
    setTimeout(() => {
      this.copied.set(false);
    }, 2000);
  }
}
