import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";
import { BsMedium } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      // style={{
      //   maxHeight: 'calc(100vh+40px)', 
      //   position: 'absolute',
      //   width: '100%',
      // }}
    >
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="pt-3">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className="me-3" />
                  Oğuzhan Çataltaş
                </h6>
                <p>
                  TechCareer Front-End From Start To Finish Bootcamp Last
                  Project
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon className="me-2" />
                  <a
                    href="https://www.linkedin.com/in/o%C4%9Fuzhan-%C3%A7atalta%C5%9F-aab179227/"
                    className="me-4 text-reset"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLogoLinkedin />
                  </a>{" "}
                  LinkedIn
                </p>
                <p>
                  <MDBIcon className="me-1" />
                  <a
                    href="https://github.com/oguzhancataltas"
                    className="me-4 text-reset"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BiLogoGithub />
                  </a>{" "}
                  GitHub
                </p>
                <p>
                  <MDBIcon className="me-2" />
                  <a
                    href="https://medium.com/@cataltasoguzhan"
                    className="me-4 text-reset"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsMedium />
                  </a>{" "}
                  Medium
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
