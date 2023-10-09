import 'tailwindcss/tailwind.css';
import { CountProvider } from './CartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CountProvider>
      <Component {...pageProps} />;
    </CountProvider>
  );
}

export default MyApp;
