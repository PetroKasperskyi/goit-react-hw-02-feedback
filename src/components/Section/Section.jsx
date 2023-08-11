import { Wrapper } from "./Section.styled";

export function Section({ title, children }) {
  return (
    <Wrapper>
      <h2>{title}</h2>
      {children}
    </Wrapper>
  );
}