import { Input } from '../Input'
import { InputSelection } from '../InputSelection'
import { Label } from '../Label'
import * as S from './styles'
import {} from 'react'

const units: Array<string> = ['Un', 'L', 'Kg']

export function InputQuantity() {
  return (
    <S.Container>
      <S.InputContainer>
        <Input type="number" id="quantity" />
        <InputSelection data={units} />
      </S.InputContainer>
      <Label text="Quantidade" />
    </S.Container>
  )
}
