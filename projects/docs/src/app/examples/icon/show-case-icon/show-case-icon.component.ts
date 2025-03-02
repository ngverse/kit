import { IconComponent } from '@/ui/icon/icon.component';
import { IconRegistry } from '@/ui/icon/icon.registry';
import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'doc-show-case-icon',
  imports: [IconComponent, FormsModule],
  templateUrl: './show-case-icon.component.html',
  styleUrl: './show-case-icon.component.css',
})
export class ShowCaseIconComponent {
  iconRegistry = inject(IconRegistry);
  icons = ['bird', 'cat', 'heart', 'paw', 'squirrel', 'volleyball'];
  size = model<number>(20);
  color = model<string>('#00000');

  constructor() {
    for (const icon of this.icons) {
      this.iconRegistry.addIcon(icon, `/show-case-icon/${icon}.svg`);
    }
  }
}
