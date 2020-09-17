import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Text, Heading, Link, Container } from 'theme-ui'
import Layout from '../components/Layout'
import getStats, { Book } from '../utils/getStats'
import pluralize from '../utils/pluralize'

interface ValueCountProps {
  value: number
  singular: string
  plural: string
}

const ValueCount: React.FC<ValueCountProps> = ({ value, singular, plural }) => (
  <React.Fragment>
    {value.toLocaleString()} {pluralize(value, singular, plural)}
  </React.Fragment>
)

interface FormattedBookProps {
  book: Book
}

const FormattedBook: React.FC<FormattedBookProps> = ({ book }) => (
  <React.Fragment>
    &ldquo;{book.name}&rdquo; by {book.author}
  </React.Fragment>
)

interface BooksToSentenceProps {
  books: Array<Book>
}

const BooksToSentence: React.FC<BooksToSentenceProps> = ({ books }) => {
  if (books.length === 1) return <FormattedBook book={books[0]} />

  if (books.length === 2)
    return (
      <React.Fragment>
        <FormattedBook book={books[0]} /> and <FormattedBook book={books[1]} />
      </React.Fragment>
    )

  return (
    <React.Fragment>
      {books.map((book, index) => {
        if (index === 0) return <FormattedBook book={book} />

        if (index + 1 === books.length) {
          return (
            <React.Fragment>
              , and <FormattedBook book={book} />
            </React.Fragment>
          )
        }

        return (
          <React.Fragment key={book.name}>
            , <FormattedBook book={book} />
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}

const IndexPage: React.FC = () => {
  const { stats } = useStaticQuery(graphql`
    query IndexPage {
      stats {
        commits
        tweets
        steps
        places
        songs
        album {
          name
          artist
        }
        books {
          name
          author
        }
      }
    }
  `)

  const [commits, setCommits] = React.useState(stats.commits)
  const [tweets, setTweets] = React.useState(stats.tweets)
  const [steps, setSteps] = React.useState(stats.steps)
  const [places, setPlaces] = React.useState(stats.places)
  const [songs, setSongs] = React.useState(stats.songs)
  const [album, setAlbum] = React.useState(stats.album)
  const [books, setBooks] = React.useState(stats.books)

  const hydrateStats = async (): Promise<void> => {
    const {
      commits: commitStat,
      tweets: tweetsStat,
      places: placesStat,
      steps: stepsStat,
      songs: songsStat,
      album: albumStat,
      books: booksStat,
    } = await getStats()

    if (typeof commitStat === 'number') setCommits(commitStat)

    if (typeof tweetsStat === 'number') setTweets(tweetsStat)

    if (typeof placesStat === 'number') setPlaces(placesStat)

    if (typeof stepsStat === 'number') setSteps(stepsStat)

    if (typeof songsStat === 'number') setSongs(songsStat)

    if (albumStat?.name && albumStat?.artist) setAlbum(albumStat)

    if (booksStat.length > 0) setBooks(booksStat)
  }

  React.useEffect(() => {
    hydrateStats()
  }, [])

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
            I'm a third-year engineering student at UWaterloo.
          </Heading>{' '}
          <br/>
          <Heading as="h2" variant="site-intro">
            Currently, I'm {' '}
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
