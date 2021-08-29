import Div from 'components/atoms/Div'
import Icon from 'components/atoms/Icon'
import Input from 'components/atoms/Input'

const Search = ({ ...props }) => (
  <Div
    alignItems='center'
    borderWidth='1px'
    borderStyle='solid'
    borderColor='black10'
    w='fit-content'
    {...props}
  >
    <Div h='40px' w='40px' justifyContent='center' alignItems='center'>
      <Icon type='search' />
    </Div>
    <Input type='search' />
  </Div>
)

export default Search
