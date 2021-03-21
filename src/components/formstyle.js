import styled from 'styled-components';

const Form = styled.form`
  max-width: 35rem;
  background-color: ${(props) => props.theme.colors.raiseOne};
  padding: ${(props) => props.theme.spacing.verticalGap} 1rem;
  border-radius: 0.5rem;
`;

// check whether this similar to button styes already written out
const Button = styled.button`
  width: 100%;
  color: white;
  background-color: ${(props) => props.theme.colors.raiseOne};
  border: solid 1px white;
  border-radius: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    color: ${(props) => props.theme.colors.raiseOne};
    background-color: white;
  }
`;

const Input = styled.input`
  border-radius: 0.25rem;
  font-family: inherit;
  font-size: 100%;
  border: 1px solid ${(props) => props.theme.colors.raiseTwo};
  background-color: ${(props) => props.theme.colors.raiseTwo};
  width: 100%;
  color: white;
  padding: 0.5rem;
  margin-bottom: 0.75rem;
  &:focus {
    outline: none;
    border: 1px solid white;
  }
`;

export { Form, Button, Input };
