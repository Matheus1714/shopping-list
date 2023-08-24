import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 0.75rem;
  grid-template-areas:
    'item item item'
    'quantity category add';
`

export const InputCategory = styled.div`
  grid-area: category;
`

export const ButtonAddItem = styled.button`
  grid-area: add;
`
