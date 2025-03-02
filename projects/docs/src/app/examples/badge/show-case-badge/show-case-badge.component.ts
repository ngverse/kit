import { BadgeComponent } from '@/ui/badge/badge.component';
import { ButtonComponent } from '@/ui/button/button.component';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'doc-show-case-badge',
  imports: [FormsModule, ButtonComponent, BadgeComponent],
  templateUrl: './show-case-badge.component.html',
  styleUrl: './show-case-badge.component.css',
})
export class ShowCaseBadgeComponent {
  count = signal(8);
  decreese() {
    if (!this.count()) {
      return;
    }

    this.count.update((c) => c - 1);
  }
}
