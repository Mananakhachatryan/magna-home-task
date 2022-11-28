import styled, { css } from "styled-components";
import Image from "next/image";
import bannerBg from "../../public/img/banner-bg.png";

const fontFamilyStyle = css`
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #5b6671;
`;

export const SignInContainer = styled.div`
  ${fontFamilyStyle}
  background-color: #000;
  width: 100%;
  height: 100%;
  h3 {
    font-size: 30px;
    margin: 0px;
    color: #fff;
  }
`;

export const ImageBg = styled(Image)`
  position: absolute;
  height: 100%;
  width: auto;
  right: 0px;
  top: 0px;
`;

export const Button = styled.button`
  color: #fff;
  border: none;
  display: flex;
  margin: 20px auto;
  padding: 12px 24px 12px 20px;
  background-image: linear-gradient(66deg, #e13d71, #bf279f);
  &:hover {
    cursor: pointer;
    background-image: linear-gradient(162deg, #e13d71, #bf279f);
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
