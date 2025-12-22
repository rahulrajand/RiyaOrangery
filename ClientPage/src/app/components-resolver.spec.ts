import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { componentsResolver } from './components-resolver';

describe('componentsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => componentsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
