import * as S from './styles'

interface LabelProps {
  text: string
}

export function Label({ text }: LabelProps) {
  return <S.Container>{text}</S.Container>
}
