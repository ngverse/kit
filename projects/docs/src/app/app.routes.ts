import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'docs',
    loadComponent: () =>
      import('./pages/doc-container-page/doc-container-page.component').then(
        (k) => k.KitContainerPageComponent
      ),
    children: [],
  },
];
