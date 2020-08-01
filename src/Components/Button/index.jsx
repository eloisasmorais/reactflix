import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.7em 1em;
  text-align: center;
  color: var(--primary);
  border: 0;
  background: var(--primary);
  color: var(--accent);
  transition: all 0.2s linear;

  @media screen and (min-width: 1024px) {
    position: unset;
    border-radius: 4px;
    border: 1px solid var(--primary);
    background: none;
    color: var(--primary);

    &:hover {
      background: var(--primary);
      color: var(--accent);
    }
  }
`;

export default Button;
