import { Form } from '../../components/Form'
import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <S.HeaderContianer></S.HeaderContianer>
      <S.BodyContainer>
        <h1>Lista de Compras</h1>
        <Form />
      </S.BodyContainer>
    </S.Container>
  )
}
