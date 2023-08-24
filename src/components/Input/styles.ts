import styled from 'styled-components'

export const Container = styled.input`
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.gray300};
  padding: 0.75rem;

  font-weight: 400;

  background: ${(props) => props.theme.colors.gray500};
  color: ${(props) => props.theme.colors.gray100};

  transition: box-shadow 0.2s;

  &:focus {
    outline: transparent;
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.purpleLight};

    + label {
      color: ${(props) => props.theme.colors.purpleLight};
    }
  }
`
