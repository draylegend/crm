import { Provider } from '@angular/core';
import { apiInterceptorProvider } from './api.interceptor';

export const coreProviders: Provider[] = [apiInterceptorProvider];
