import * as React from 'react'
import { Text, Heading, Link, Container } from 'theme-ui'
import Layout from '../components/Layout'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Text variant="section-heading" mb={3}>
          HELLO
        </Text>

        {/* The `Text` wrapper makes sure spaces are consistently sized */}
        <Text variant="site-intro" sx={{ display: 'contents' }}>
          <Heading as="h1" variant="site-intro" sx={{ fontWeight: 'bold' }}>
            My name is Rachel.
          </Heading>{' '}
          <br/>
          <Heading as="h2" variant="site-intro">
            I&apos;m a third-year engineering student at UWaterloo.
          </Heading>{' '}
          <br/>
          <Heading as="h2" variant="site-intro">
            Currently, I&apos;m {' '}
            <Link href="mailto:rjmaduka@uwaterloo.ca">
              looking for my next opportunity
            </Link>.
          </Heading>{' '}
          <Text as="p" variant="site-intro"></Text>
        </Text>
      </Container>
    </Layout>
  )
}

export default IndexPage
