import Button from 'components/atoms/Button'
import Div from 'components/atoms/Div'
import Text from 'components/atoms/Text'

import type { SelectOptionProps } from './types'

const SelectOption = ({ text, onClick, ...props }: SelectOptionProps) => (
  <Button variant='ghost' onClick={e => onClick(e)} w='100%' {...props}>
    <Div
      h='40px'
      borderTopWidth='1px'
      borderTopColor='black10'
      w='100%'
      px='8px'
      py='4px'
      alignItems='center'
    >
      <Text>{text}</Text>
    </Div>
  </Button>
)

export default SelectOption
