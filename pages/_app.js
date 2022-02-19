import '../styles/globals.css'
//we can only import global styles in in this module

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
