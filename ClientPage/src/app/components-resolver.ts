import { ResolveFn } from '@angular/router';

export const componentsResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
