
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'RiyaOrangery',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/RiyaOrangery/fpage",
    "route": "/RiyaOrangery"
  },
  {
    "renderMode": 2,
    "route": "/RiyaOrangery/fpage"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9214, hash: '8beca415006cf80a52d4e44dd003a2e30610adbaa381059b26d4d14589315b4d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6322, hash: '395d4f25a312a2afcef511ccf25047ae0bd881dfc1a6329c08c128a93d79c28f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-2ZRWGDGU.css': {size: 297642, hash: 'aWaXl3NsP2c', text: () => import('./assets-chunks/styles-2ZRWGDGU_css.mjs').then(m => m.default)}
  },
};
