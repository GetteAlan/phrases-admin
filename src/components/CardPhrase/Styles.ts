import styled from "styled-components";

export const Header = styled.div`
    position: absolute;
    bottom: 16px;
    right: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    height: 24px;
    background-color: rgb(230, 209, 197);
    border-radius: 4px;

    opacity: 0;
    transition: opacity 0.3s ease-in-out;
`;

export const Text = styled.span`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0;
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CardContentWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
  position: relative;

  &:hover ${Header} {
    opacity: 1;
  }
`;
