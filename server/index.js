import express from 'express';
import next from 'next';
import { parse as parseUrl } from 'url';
import StoreProvider from '../core/store/Provider';

export default () => {
  const port = parseInt(process.env.PORT, 10) || 3000
  const dev = process.env.NODE_ENV !== 'production'
  const app = next({ dev })
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
      const parsedUrl = parseUrl(req.url, true)
      handle(req, res, parsedUrl)
    })
  })
}
