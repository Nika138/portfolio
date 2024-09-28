import {
  ApplicationConfig,
  inject,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  IsActiveMatchOptions,
  provideRouter,
  Router,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withViewTransitions({
        onViewTransitionCreated: ({ transition }) => {
          const router = inject(Router);
          const targetUrl = router.getCurrentNavigation()!.finalUrl!;

          const config: IsActiveMatchOptions = {
            paths: 'exact',
            matrixParams: 'ignored',
            fragment: 'ignored',
            queryParams: 'ignored',
          };

          if (router.isActive(targetUrl, config)) {
            transition.skipTransition();
          }
        },
      })
    ),
  ],
};
