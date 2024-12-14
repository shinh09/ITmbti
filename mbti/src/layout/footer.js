// Footer.js
import React from 'react';
import styled from 'styled-components'; 

const FooterSection = styled.footer`
  width: 100%;
  height: 150px;
  font-family: GmarketSans;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  color: white;

  .logo {
    display: flex;
    align-items: center;
    margin: 0 50px;
    img {
      width: 132px;
      height: auto;
    }
  }

  .contents {
    height: 100%;
    opacity: 0.92;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
  }

  .upper {
    display: flex;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .logo-left,
  .logo-right {
    display: flex;
    align-items: center;
  }

  .logo-left {
    img {
      width: 141px;
      height: 15px;
    }
  }

  .logo-right {
    img {
      width: 103px;
      height: 30px;
    }
  }

  .lower {
    display: flex;
    justify-content: space-between;
    font-size: 19px;
    padding: 0 20px;
  }

  .text1,
  .text2,
  .text3 {
  }

  .text1,
  .text3 {
    font-weight: 500;
  }

  .text2 {
    font-weight: 300;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <div className="logo">
        <img src="/img/seoultech.svg" alt="main-logo" />
      </div>
      <div className="contents">
        <div className="lower">
          <div className="text1">Seoul National University of Science and Technology</div>
          <div className="text2">ITM OSS PROJECT</div>
          <div className="text3">김도이 박신형 오은영 이한얼 황유영</div>
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;