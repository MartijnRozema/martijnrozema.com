import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.routes').then((m) => m.HOME_ROUTES),
  },
  // Unknown paths fall back to the page instead of rendering nothing. This also covers /nl/
  // on the dev server, which only serves one locale at a time.
  { path: '**', redirectTo: '' },
];
