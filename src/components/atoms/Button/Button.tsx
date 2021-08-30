import styled, { css, th } from '@xstyled/styled-components'

import type { ButtonProps } from './types'

const getButtonVariant = (variant: string) => {
  switch (variant) {
    case 'ghost':
      return css`
        height: fit-content;
        width: fit-content;
        min-width: fit-content !important;
        border: none;
        border-radius: 0;
        background: transparent;
        padding: 0;
      `

    default:
      return ''
  }
}

const Button = styled.buttonBox<ButtonProps>`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-width: 100px;
  border-radius: 4px;
  border: 1px solid ${th.color('black10')};
  padding: 4px 8px;

  @media (min-width: md) {
    min-width: 150px;
  }

  ${({ variant }: ButtonProps) => getButtonVariant(variant || '')}
`

export default Button
