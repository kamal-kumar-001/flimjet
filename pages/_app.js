import Layout from '../components/Layout'
import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
<NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
