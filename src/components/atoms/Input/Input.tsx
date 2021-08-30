import styled from '@xstyled/styled-components'

const Input = styled.inputBox`
  outline: none;
  min-height: 40px;
  height: 100%;
  width: 100%;
  color: black87;
  font-size: 1.4rem;
  border: none;

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    content: url('/icons/close-button-icon.svg');
    margin-right: 6px;
    cursor: pointer;
  }
`

export default Input
