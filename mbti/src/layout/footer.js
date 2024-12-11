// Footer.js
import React from 'react';
import styled from 'styled-components'; 

const FooterSection = styled.footer`
  width: 100%;
  height: 114px;
  font-family: GmarketSans;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
    background: linear-gradient(94deg, #e02525 -14.69%, #7a1414 99.86%);
    box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25),
      0px 4px 45px 350px rgba(0, 0, 0, 0.11) inset,
      0px 4px 111.1px 0px #000 inset,
      0px 0px 83.9px 109px rgba(0, 0, 0, 0.3) inset;

    color: white;
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
        <img src="/img/startcat.png" alt="main-logo" />
      </div>
      <div className="contents">
        <div className="upper">
          <div className="logo-left">
            <img src="/img/startcat.png" alt="likelion-logo" />
          </div>
          <div className="logo-right">
            <img src="/images/seoultech.png" alt="seoultech-logo" />
          </div>
        </div>
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