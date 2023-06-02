import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';

const tagManagerArgs = {
  gtmId: 'UA-146778312-1'
}

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  })
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          mode='wait'
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

export default Website
