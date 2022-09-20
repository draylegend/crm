import { accessTokenInterceptor } from './access-token.interceptor';

export const provideAuth = () => [accessTokenInterceptor];
