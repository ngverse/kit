import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'doc',
    loadComponent: () =>
      import('./pages/doc-container-page/doc-container-page.component').then(
        (k) => k.DocContainerPageComponent
      ),
    children: [
      {
        path: 'accordion',
        loadComponent: () =>
          import('./pages/accordion-page/accordion-page.component').then(
            (k) => k.AccordionPageComponent
          ),
      },
    ],
  },
];
