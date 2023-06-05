import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'

const port = parseInt(process.env.PORT || '5666', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true)

    if (parsedUrl.pathname === '/.well-known/lnurlp/sepiropht') {
      // Handle the /.well-known/lnurlp/sepiropht endpoint here
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({"status":"OK","tag":"payRequest","commentAllowed":255,"callback":"https://getalby.com/lnurlp/sepiropht/callback","metadata":"[[\"text/identifier\",\"sepiropht@getalby.com\"],[\"text/plain\",\"Sats for Sepiropht\"]]","minSendable":1000,"maxSendable":11000000000,"payerData":{"name":{"mandatory":false},"email":{"mandatory":false},"pubkey":{"mandatory":false}},"nostrPubkey":"79f00d3f5a19ec806189fcab03c1be4ff81d18ee4f653c88fac41fe03570f432","allowsNostr":true}))
    } else if(parsedUrl.pathname === '/.well-known/nostr.json') {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify({
        "names": {
          "sepiropht": "8fac8f40655ed30f55e647f82c18b4a029e4ffd06d66ebde1f8c24e03065fad1"
        }
      }))

    } else {
      // For all other routes, use Next.js default handler
      handle(req, res, parsedUrl)
    }
  }).listen(port)

  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  )
})