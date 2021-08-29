import Icon from 'components/atoms/Icon'

import { Input, Container, IconContainer } from './style'

const Search = ({ ...props }) => (
  <Container {...props}>
    <IconContainer>
      <Icon type='search' />
    </IconContainer>
    <Input type='search' />
  </Container>
)

export default Search
