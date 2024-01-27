import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import tubetotext from '../public/images/works/tubetotext.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="https://tubetotext.com"
            title="Tubetotext"
            thumbnail={tubetotext}
          >
            Welcome to tubetotext AI, where cutting-edge technology meets video
            content! Revolutionize your YouTube experience with our powerful
            AI-driven video summarization web app.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
