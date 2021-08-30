import type { AppProps } from 'next/app'

import { ThemeProvider } from '@xstyled/styled-components'

import GlobalStyle from 'theme/GlobalStyle'
import theme from 'theme/theme'

import 'theme/preflight.css'
import 'react-datepicker/dist/react-datepicker.css'

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
