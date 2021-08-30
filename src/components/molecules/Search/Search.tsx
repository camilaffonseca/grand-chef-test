import Div from 'components/atoms/Div'
import Icon from 'components/atoms/Icon'
import Input from 'components/atoms/Input'

import { SearchProps } from './types'

const Search = ({ placeholder, ...props }: SearchProps) => (
  <Div
    alignItems='center'
    borderWidth='1px'
    borderStyle='solid'
    borderColor='black10'
    borderRadius='4px'
    w='fit-content'
    h='fit-content'
    {...props}
  >
    <Div h='40px' w='40px' justifyContent='center' alignItems='center'>
      <Icon type='search' />
    </Div>
    <Input placeholder={placeholder} type='search' />
  </Div>
)

export default Search
