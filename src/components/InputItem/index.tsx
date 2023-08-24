import { Input } from '../Input'
import { Label } from '../Label'
import * as S from './styles'

export function InputItem() {
  return (
    <S.Container>
      <Input type="text" />
      <Label text="Item" />
    </S.Container>
  )
}
