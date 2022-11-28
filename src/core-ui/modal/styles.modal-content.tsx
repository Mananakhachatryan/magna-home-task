import styled, { css } from "styled-components";
import Image from "next/image";
import bannerBg from "../../public/img/banner-bg.png";
import { Modal, Layout, Table } from "antd";
import { Form } from "formik";

const fontFamilyStyle = css`
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 400 !important;
  font-size: 14px !important;
  line-height: 24px;
`;
export const ModalContent = styled(Modal)``;

export const Title = styled.h5`
  font-size: 18px;
  color: #fff;
  margin: 0px 0 20px;
`;

export const DialogModalForm = styled(Form)`
  width: 100%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: inherit;
  overflow: hidden;
  input {
    margin-bottom: 20px;
    width: 100%;
    max-width: 426px;
    padding: 0 20px;
    border-radius: 4px;
    height: 38px;
    outline: none;
  }
`;

export const DialogModalButton = styled.button`
  color: #050505;
  line-height: 21px;
  font-size: 16px;
  color: #fff;
  float: right;
  font-weight: 500;
  background-color: #fff;
  border: none;
  padding: 6px 20px;
  border-radius: 4px;
  background-image: linear-gradient(135deg, #e13d71, #bf279f);
`;
