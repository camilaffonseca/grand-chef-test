import { useState, useRef } from 'react'

import useOnClickOutside from 'hooks/useOnClickOutside'

import Button from 'components/atoms/Button'
import Div from 'components/atoms/Div'
import Icon from 'components/atoms/Icon'
import Text from 'components/atoms/Text'
import Card from 'components/molecules/Card'

import { truncate } from 'utils/formatters'

import SelectOption from './SelectOption'

import type { Option, SelectProps } from './types'

const Select = ({
  options,
  onChange,
  defaultValue,
  dropdown,
  title,
  ...props
}: SelectProps) => {
  const [currentValue, setCurrentValue] = useState<Option | undefined>(defaultValue)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const containerRef = useRef(null)

  const handleClickOutside = () => {
    setIsOpen(false)
  }

  useOnClickOutside(containerRef, handleClickOutside)

  return (
    <Div w='fit-content' ref={containerRef} flexDirection='column' {...props}>
      <Button
        variant={dropdown ? 'ghost' : ''}
        gap={dropdown && '3px'}
        justifyContent='space-between'
        paddingRight={!dropdown && '4px'}
        onClick={() => {
          setIsOpen(currentState => !currentState)
        }}
      >
        <Div flexDirection='column' alignItems='flex-start'>
          <Text
            fontSize='1.2rem'
            color={dropdown ? 'black60' : 'black54'}
            lineHeight='1.4rem'
          >
            {dropdown ? truncate(currentValue?.label || title, 20, false) : title}
          </Text>
          {!dropdown && (
            <Text lineHeight='1.6rem'>
              {truncate(currentValue?.label || '-', 14, false)}
            </Text>
          )}
        </Div>
        <Icon
          fontSize={dropdown ? '1.3rem' : '2.4rem'}
          color='black54'
          type='arrow_drop_down'
        />
      </Button>
      {isOpen && (
        <Div w='fit-content'>
          <Card
            flexDirection='column'
            minWidth={
              dropdown ? { xs: '90px', lg: '110px' } : { xs: '120px', lg: '149px' }
            }
            w='fit-content'
            position='absolute'
          >
            {options.map(option => (
              <SelectOption
                key={option.label}
                onClick={() => {
                  setIsOpen(currentState => !currentState)
                  onChange(option)
                  setCurrentValue(option)
                }}
                text={option.label}
                backgroundColor={Object.is(currentValue, option) ? 'black10' : undefined}
              />
            ))}
          </Card>
        </Div>
      )}
    </Div>
  )
}

export default Select
