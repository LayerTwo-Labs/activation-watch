import '@/styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "@fontsource/roboto-mono/500.css"
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme/theme.js';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from '../components/Layout.js';
import { GA } from '../components/GA.js';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GA />
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}