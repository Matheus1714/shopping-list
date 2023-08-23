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

export const InputItem = styled.input`
  grid-area: item;
`

export const InputQuantity = styled.input`
  grid-area: quantity;
`

export const InputCategory = styled.input`
  grid-area: category;
`

export const ButtonAddItem = styled.button`
  grid-area: add;
`
