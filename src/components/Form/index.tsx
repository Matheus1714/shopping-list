import * as S from './styles'

export function Form() {
  return (
    <S.Container>
      <S.InputItem type="text" />
      <S.InputQuantity type="number" />
      <S.InputCategory type="text" />
      <S.ButtonAddItem type="submit" />
    </S.Container>
  )
}
