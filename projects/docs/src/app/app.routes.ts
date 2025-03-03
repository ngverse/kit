import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'docs',
    loadComponent: () =>
      import('./pages/kit-container-page/kit-container-page.component').then(
        (k) => k.KitContainerPageComponent
      ),
    children: [
      {
        path: 'a11y-checkbox',
        loadComponent: () =>
          import(
            './pages/a11y-checkbox-page/a11y-checkbox-page.component'
          ).then((d) => d.A11yCheckboxPageComponent),
      },
      {
        path: 'a11y-accordion',
        loadComponent: () =>
          import(
            './pages/a11y-accordion-page/a11y-accordion-page.component'
          ).then((d) => d.A11yAccordionPageComponent),
      },
      {
        path: 'a11y-tab',
        loadComponent: () =>
          import('./pages/a11y-tab-page/a11y-tab-page.component').then(
            (d) => d.A11yTabPageComponent
          ),
      },
      {
        path: 'a11y-alert',
        loadComponent: () =>
          import('./pages/a11y-alert-page/a11y-alert-page.component').then(
            (d) => d.A11yAlertPageComponent
          ),
      },
      {
        path: '',
        redirectTo: 'a11y-accordion',
        pathMatch: 'full',
      },
    ],
  },
];
