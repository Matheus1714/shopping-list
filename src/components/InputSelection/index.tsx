import { Datalist } from '../Datalist'
import { Input } from '../Input'
import * as S from './styles'
import { InputHTMLAttributes } from 'react'

interface InputSelectionProps extends InputHTMLAttributes<HTMLInputElement> {
  data: string[]
}

export function InputSelection({ data, ...rest }: InputSelectionProps) {
  return (
    <S.Container>
      <Input {...rest} />
      <Datalist data={data} />
    </S.Container>
  )
}
