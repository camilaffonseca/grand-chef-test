import { useState, useEffect } from 'react'

import styled, { createGlobalStyle, th } from '@xstyled/styled-components'

import Button from 'components/atoms/Button'
import Header from 'components/atoms/Header'
import Icon from 'components/atoms/Icon'
import Text from 'components/atoms/Text'

import type { MainHeaderProps } from './types'

const HeaderGlobalStyle = createGlobalStyle`
  body {
    padding-top: 5.6rem !important;
  }
`

const MenuContainer = styled.divBox`
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 15;

  @keyframes fadeInKeyFrame {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  animation: fadeInKeyFrame 0.4s ease;
`

const Menu = styled.divBox`
  width: 260px;
  max-width: 80vw;
  background: white;
  border-right: 1px solid ${th.color('black24')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 20;

  @keyframes swipeKeyFrame {
    from {
      margin-left: -260px;
    }

    to {
      margin-left: 0;
    }
  }

  animation: swipeKeyFrame 0.4s ease;
`

const MainHeader = ({ title }: MainHeaderProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflowY = menuIsOpen ? 'hidden' : 'auto'
  }, [menuIsOpen])

  return (
    <>
      <HeaderGlobalStyle />
      <Header position='fixed' top='0' zIndex={10}>
        <Button
          onClick={() => setMenuIsOpen(currentState => !currentState)}
          variant='ghost'
          aria-label='Menu'
        >
          <Icon fontSize='24px' type='menu' cursor='pointer' />
        </Button>
        <Text as='h1' ml='3.2rem' fontWeight='500' fontSize='2rem' color='black87'>
          {title}
        </Text>
      </Header>
      {menuIsOpen && (
        <>
          <MenuContainer onClick={() => setMenuIsOpen(false)} />
          <Menu />
        </>
      )}
    </>
  )
}

export default MainHeader
