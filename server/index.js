import express from 'express';
import next from 'next';
import { parse as parseUrl } from 'url';

import { preCacheSourceFiles, preMakeBuildFolder } from '../lib/pre-start';
import StoreProvider from '../lib/store/Provider';
import isDocURL from '../utils/isDocURL';

export default () => {
  const port = parseInt(process.env.PORT, 10) || 3000
  const dev = process.env.NODE_ENV !== 'production'
  const app = next({ dev })

  preCacheSourceFiles();
  preMakeBuildFolder();

  const handle = app.getRequestHandler()

  const storeProvider = new StoreProvider();
  storeProvider.resolveMeta();

  app.prepare()
  .then(() => {
    const siteApp = express();
    siteApp.listen(port, err => {
      if (err) throw err;
      console.log(`> Site generator ready on http://localhost:${port}`)
    })

    siteApp.get('*', (req, res) => {
      let parsedUrl = parseUrl(req.url, true)
      const { pathname } = parsedUrl;

      if (isDocURL(pathname)) {
        storeProvider.prepareDataSource(pathname);
        const parsed = (pathname.replace(/^.*(?=docs)/, '')).split('/');

        parsedUrl = {
          pathname: `/${parsed.slice(0, 2).join('/')}`,
          path: '/docs',
          href: '/docs',
        }
      }

      handle(req, res, parsedUrl)
    })
  })
}
