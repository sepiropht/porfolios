import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import { Analytics } from '@vercel/analytics/react'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="William's homepage" />
        <meta name="author" content="William Elimbi" />
        <meta name="author" content="craftzdog" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="William Elimbi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sepiropht" />
        <meta name="twitter:creator" content="@csepiropht" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="William Elimbi" />
        <meta name="og:title" content="William Elimbi" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <script
          async
          src="https://analytics.sepir.cloud/script.js"
          data-website-id="ae8a6792-160d-46af-afcb-435979ba069e"
        ></script>
        <title>William Elimbi - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
        <Analytics />
      </Container>
    </Box>
  )
}

export default Main
