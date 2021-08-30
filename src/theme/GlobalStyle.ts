import { createGlobalStyle } from '@xstyled/styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: background;
    font-family: 'Roboto', sans-serif;
    font-size: 2.6vw;
    color: black60;
    max-width: 100vw;

    @media (min-width: 420px) {
      font-size: 12px;
    }

    @media (min-width: md) {
      font-size: 10px;
    }

    *::-webkit-scrollbar {
      width: 8px;
    }

    *::-webkit-scrollbar-track {
      background-color: transparent;
    }

    *::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      border-radius: 5px;
      outline: none;
    }

    .react-datepicker {
      font-size: 1.1em;
    }
    .react-datepicker__header {
      padding-top: 0.8em;
    }
    .react-datepicker__month {
      margin: 0.4em 1.1em;
    }
    .react-datepicker__day-name, .react-datepicker__day {
      width: 1.9em;
      line-height: 1.9em;
      margin: 0.166em;
    }
    .react-datepicker__current-month {
      font-size: 1em;
    }
    .react-datepicker__navigation--previous {
      border-right-color: #ccc;
      left: 1em;
    }
    .react-datepicker__navigation--next {
      border-left-color: #ccc;
      right: 1em;
    }
  }
`

export default GlobalStyle
