import { InputItem } from '../InputItem'
import { InputQuantity } from '../InputQuantity'
import * as S from './styles'

export function Form() {
  return (
    <S.Container>
      <InputItem />
      <InputQuantity />
      <S.InputCategory />
      <S.ButtonAddItem type="submit" />
    </S.Container>
  )
}
