import styled, { css } from "styled-components";
import Image from "next/image";
import bannerBg from "../../public/img/banner-bg.png";
import { Layout, Table } from "antd";

const fontFamilyStyle = css`
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 400 !important;
  font-size: 14px !important;
  line-height: 24px;
`;

export const LayoutContent = styled(Layout)`
  background-color: #050505;
`;
export const Header = styled.div`
  ${fontFamilyStyle}
  width: 100%;
  height: 89px;
  display: flex;
  padding: 24px 50px;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1px solid #232229;
  a {
    height: 24px;
  }
`;

export const Button = styled.button`
  padding: 0px 20px;
  color: #050505;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #fff;
  line-height: 37px;
  font-weight: 500;
  background-color: #fff;
  transition-property: all;
  transition-duration: 0.2s;
  &:hover {
    background-color: hsla(0, 0%, 100%, 0);
    color: #fff;
    cursor: pointer;
  }
`;

export const AddButton = styled.button`
  float: right;
  color: #fff;
  margin-bottom: 20px;
  border: none;
  letter-spacing: 2px;
  padding: 6px 20px;
  border-radius: 4px;
  background-image: linear-gradient(135deg, #e13d71, #bf279f);
`;

export const Content = styled.div`
  width: 80%;
  margin: auto;
  padding: 50px 0;
`;
export const TableContent = styled(Table)`
  * {
    background-color: #131316 !important;
  }
  thead {
    tr {
      th {
        ${fontFamilyStyle}
        background: #131316 !important;
        border-color: #212126 !important;
        color: #7f7e8b !important;
        &:before {
          background-color: #212126 !important;
        }
      }
    }
  }
  tbody {
    tr {
      td {
        background: #131316 !important;
        border-color: #212126 !important;
        color: #d3d3d4 !important;
        div {
          color: #d3d3d4 !important;
        }
        &:before {
          background-color: #212126 !important;
        }
      }
      &:hover {
        border-radius: unset !important;
        td {
          border-radius: unset !important;
        }
      }
    }
  }
`;
