import styled from '@emotion/styled';

export const FileFindContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

export const FileFindLabelBox = styled.label`
  border: 0.4rem solid var(--color-border);
  border-radius: 1rem;
  width: 45rem;
  height: 4.2rem;
  background-color: var(--color-backgorund-black);
  color: var(--color-text-placeholder);
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  font-size: 1.8rem;
  font-weight: 700;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FileFindButton = styled.label`
  background-color: var(--color-background-secondary);
  width: 10rem;
  height: 4.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-primary);
  font-size: 2rem;
  font-weight: 700;
  border-radius: 10px;
  margin-left: 10px;
`;
