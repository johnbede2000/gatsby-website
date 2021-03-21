import styled from 'styled-components';

export const WidthContainer = styled.div`
  max-width: 1170px;
  width: 90vw;
  margin: 0 auto;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VerticalGap = styled.div`
  & > * + * {
    margin-top: var(--vertical-gap);
  }
`;
