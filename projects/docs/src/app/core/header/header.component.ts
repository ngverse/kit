import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { afterNextRender, Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import docsearch from '@docsearch/js';
import { ExternalLinkIcon } from '@ngverse/icons-lu';
import { LucideAngularModule, Menu } from 'lucide-angular';
import { filter, take, takeUntil } from 'rxjs';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'doc-header',
  imports: [RouterLink, LucideAngularModule, ExternalLinkIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  Menu = Menu;
  overlay = inject(Overlay);
  overlayRef: OverlayRef | undefined;
  router = inject(Router);

  constructor() {
    afterNextRender(() => {
      docsearch({
        appId: 'X673ZXLVHG',
        apiKey: 'bad40449d2ac4f445576ed2d6a65176b',
        indexName: 'ngverse',
        container: '#docsearch',
      });
    });
  }

  showSidebar() {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().left(),

      hasBackdrop: true,
      disposeOnNavigation: true,
    });
    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef?.dispose();
    });
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .pipe(take(1))
      .pipe(takeUntil(this.overlayRef.backdropClick().pipe(take(1))))
      .subscribe(() => {
        this.overlayRef?.dispose();
      });
    this.overlayRef.attach(new ComponentPortal(SidebarComponent));
  }
}
