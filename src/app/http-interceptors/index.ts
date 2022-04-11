import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { BaseInterceptor } from './base.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true },
];
