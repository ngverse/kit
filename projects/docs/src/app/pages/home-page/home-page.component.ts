import { AlertBodyComponent } from '@/ui/alert/alert-body.component';
import { AlertHeaderComponent } from '@/ui/alert/alert-header.component';
import { AlertComponent } from '@/ui/alert/alert.component';
import { ButtonComponent } from '@/ui/button/button.component';
import { IconComponent } from '@/ui/icon/icon.component';
import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import {
  Clipboard,
  ClipboardPaste,
  LucideAngularModule,
  Rocket,
} from 'lucide-angular';

@Component({
  selector: 'doc-home-page',
  imports: [
    RouterLink,
    LucideAngularModule,
    IconComponent,
    ButtonComponent,
    AlertComponent,
    AlertHeaderComponent,
    AlertBodyComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  Clipboard = Clipboard;
  ClipboardPaste = ClipboardPaste;
  Rocket = Rocket;
  title = inject(Title);
  meta = inject(Meta);
  document = inject(DOCUMENT);
  constructor() {
    this.title.setTitle('ngverse');

    this.meta.addTags([
      { property: 'og:title', content: 'NgVerse' },
      {
        property: 'og:description',
        content: 'Collection of Angular components',
      },
      {
        property: 'og:image',
        content: 'https://www.ngverse.dev/logo.png',
      },
      { property: 'og:image:alt', content: 'NgVerse logo' },
      { property: 'og:url', content: this.document.location.href },
      { property: 'og:type', content: 'website' },
    ]);
  }
}
