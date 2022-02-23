//we can only import global styles in in this module
import Navbar from '../components/Navbar';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return <>
    <Navbar />
    <Component {...pageProps} />
  </>
}

export default MyApp;
