import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  DestroyRef,
  assertInInjectionContext,
  inject,
  require_cjs,
  require_operators
} from "./chunk-RXG3YG2A.js";
import {
  __toESM
} from "./chunk-6DU2HRTW.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var import_operators = __toESM(require_operators(), 1);
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    ngDevMode && assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new import_rxjs.Observable((subscriber) => {
    if (destroyRef.destroyed) {
      subscriber.next();
      return;
    }
    const unregisterFn = destroyRef.onDestroy(subscriber.next.bind(subscriber));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe((0, import_operators.takeUntil)(destroyed$));
  };
}

export {
  takeUntilDestroyed
};
//# sourceMappingURL=chunk-DJE5RKJL.js.map
