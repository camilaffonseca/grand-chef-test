import type { AppProps } from 'next/app'

import 'theme/preflight.css'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App
