import styled from 'styled-components'

export const Container = styled.div`
  grid-area: quantity;

  display: flex;
  flex-direction: column-reverse;
  row-gap: 0.5rem;

  width: 10rem;
`

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  input {
    margin: 0;
    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: 0;
      width: 5.5rem;
    }
    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left: 0;

      background: ${(props) => props.theme.colors.gray400};
    }
  }
`
