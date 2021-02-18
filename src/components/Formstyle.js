import styled from 'styled-components';

const Form = styled.form`
  max-width: 35rem;
  background-color: var(--raise-one);
  padding: var(--vertical-gap) 1rem;
  border-radius: 0.5rem;
`;

const Button = styled.button`
  width: 100%;
  color: white;
  background-color: var(--raise-one);
  border: solid 1px white;
  border-radius: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    color: var(--raise-one);
    background-color: white;
  }
`;

const Input = styled.input`
  border-radius: 0.25rem;
  font-family: inherit;
  font-size: 100%;
  border: 1px solid var(--raise-two);
  background-color: var(--raise-two);
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
