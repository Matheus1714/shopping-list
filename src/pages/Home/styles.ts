import styled from 'styled-components'
import cover from '../../assets/Cover.png'

export const Container = styled.div``

export const HeaderContianer = styled.header`
  width: 100%;
  height: 11.375rem;
  background-image: url(${cover});
  background-repeat: no-repeat;
  background-size: cover;
`

export const BodyContainer = styled.div`
  width: 100%;
  padding: 0 1.5rem;
  max-width: 45rem;
  margin: -5.375rem auto 0;

  > h1 {
    margin-bottom: 2rem;
  }
`
