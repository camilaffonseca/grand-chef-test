import styled from '@xstyled/styled-components'

import ContainerComponent from 'components/atoms/Container'
import InputComponent from 'components/atoms/Input'

export const Container = styled(ContainerComponent)`
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: black10;
`

export const IconContainer = styled(ContainerComponent)`
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
`

export const Input = styled(InputComponent)`
  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    content: url('/icons/close-button-icon.png');
    margin-right: 6px;
  }
`
