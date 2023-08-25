import styled from "styled-components";

// -----------------------------------------------------------
export const ConnectButtonWidth = "180px"; // Giá trị width của button connect
export const ConnectButtonHeight = "56px"; // Giá trị height của button connect


export const Layout = styled.div`
  position: relative;
  border-radius: 24px;
  width: ${ConnectButtonWidth};
  height: ${ConnectButtonHeight};
  border: 2px solid;
  background: white;

  color: black;
  font-weight: 600;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: all 0.2s ease-out;

  :hover,
  :focus {
    box-shadow: 0px 18px 24px rgba(0, 0, 0, 4); 
    background: linear-gradient(90deg, rgba(147,231,229,1) 0%, rgba(0,186,207,1) 42%, rgba(6,23,27,1) 100%);
  }

  ::before {
    position: absolute;
    content: "";
    top: -10px;
    left: -10px;
    border: 10px solid transparent;
    transform: rotate(135deg);
  }

  ::after {
    position: absolute;
    content: "";
    bottom: -10px;
    right: -10px;
    border: 10px solid transparent;
    transform: rotate(-45deg);
  }

  @media screen and (max-width: 1024px) {
    width: 150px;
    height: 50px;
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    width: 120px;
    height: 50px;
    font-size: 14px;
  }

  @media screen and (max-width: 425px) {
    width: 110px;
    height: 45px;
  }
`;