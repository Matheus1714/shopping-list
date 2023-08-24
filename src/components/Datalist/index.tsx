import * as S from './styles'

interface DatalistProps {
  data: string[]
}

export function Datalist({ data }: DatalistProps) {
  return (
    <S.Container>
      {data.map((item) => (
        <S.Item key={item}>{item}</S.Item>
      ))}
    </S.Container>
  )
}
