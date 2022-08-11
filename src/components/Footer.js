import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLinkContainer>
          <FooterLinkTitle>Netflix KOREA</FooterLinkTitle>
          <FooterLinkContent>
            <FooterLink href="">넷플릭스 소개</FooterLink>
            <FooterLink href="">고객 센터</FooterLink>
            <FooterLink href="">미디어 센터</FooterLink>
            <FooterLink href="">이용 약관</FooterLink>
          </FooterLinkContent>
        </FooterLinkContainer>
        <FooterDescContainer>
          <FooterDescRights>
              Netflix Rights Reserved.
          </FooterDescRights>
        </FooterDescContainer>
      </FooterContent>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid rgb(25, 25, 25);
  width: 100%;
  position: relative;
  z-index: 100;

  @media (max-width: 769px) {
    padding: 20px 20px;
    padding-bottom: 30px;
  }
`;

const FooterContent = styled.div``;

const FooterLinkContainer = styled.div`
  width: 500px;

  @media (max-width: 769px) {
    width: 100%;
  }
`;

const FooterLinkTitle = styled.div`
  color: gray;
  font-size: 17px;
`;

const FooterLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 35px;

  @media (max-width: 769px) {
    margin-top: 26px;
  }
`;

const FooterLink = styled.div`
  color: gray;
  font-size: 14px;
  width: 110px;
  margin-bottom: 21px;
  text-decoration: none;

  $:hover {
    text-decoration: underline;
  }

  @media (max-width: 769px) {
    margin-bottom: 16px;
  }
`;

const FooterDescContainer = styled.div`
  margin-top: 30px;

  @media (max-width: 769px) {
    margin-top: 20px;
  }
`;

const FooterDescRights = styled.div`
  color: white;
  font-size: 14px;
  text-align: center;
`;
