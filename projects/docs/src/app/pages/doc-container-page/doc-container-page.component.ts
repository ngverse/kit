import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent, SidebarGroup } from '../sidebar/sidebar.component';

const routes: SidebarGroup[] = [
  {
    name: 'UI',
    children: [
      {
        name: 'Accordion',
        url: '/docs/accordion',
      },
    ],
  },
];
@Component({
  selector: 'doc-doc-container-page',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './doc-container-page.component.html',
  styleUrl: './doc-container-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocContainerPageComponent {
  routes = routes;
}
