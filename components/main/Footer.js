/* eslint-disable @next/next/no-img-element */
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Link from "next/link";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsWindow } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";

const Footer = (props) => {
  return (
    <MDBContainer style={{}}>
      <div className="text-center text-lg-start text-muted footer-customs">
        <section className="d-flex justify-content-center justify-content-lg-between p-1">
          <MDBContainer className="text-center text-md-start mt-5" fluid="true">
            {/*MDBContainer*/}
            <MDBRow className="text-center text-md-start mt-3">
              {/*Logo*/}
              <MDBCol md="3" lg="2" xl="3">
                <Link href="/">
                  <img
                    src="/inovatec.png"
                    alt=""
                    className="img-fluid pb-5"
                    width={200}
                    height={100}
                  />
                </Link>
              </MDBCol>

              {/*Main*/}
              <MDBCol fluid="true">
                <MDBRow className="mt-3">
                  {/*Seccion 2*/}
                  <MDBCol
                    md="4"
                    lg="3"
                    xl="2"
                    className="me-auto mb-md-0 mb-4 pb-2"
                  >
                    <h6 className="text-uppercase fw-bold mb-3">NAVEGAÇÃO</h6>
                    <p>
                      <Link href="projetos" className="text-reset">
                        Projetos
                      </Link>
                    </p>
                    <p>
                      <Link href="inscrever" className="text-reset">
                        Inscrição
                      </Link>
                    </p>
                    <p>
                      <Link href="manual" className="text-reset">
                        Manual
                      </Link>
                    </p>
                  </MDBCol>

                  {/*Seccion 3 - Contatos*/}
                  <MDBCol
                    md="5"
                    lg="4"
                    xl="3"
                    className="me-auto mb-md-0 mb-4 pb-2"
                  >
                    <h6 className="text-uppercase fw-bold mb-3">Contato</h6>
                    <div className="">
                      <p>
                        <Link
                          href="mailto:inovatecfametro@gmail.com"
                          target="_blank"
                          className="text-reset"
                        >
                          Email
                        </Link>
                      </p>
                      <p>
                        <Link
                          href="https://goo.gl/maps/KUzTbZ35p5w7AFWo7"
                          target="_blank"
                          className="text-reset"
                        >
                          Endereço
                        </Link>
                      </p>
                    </div>
                  </MDBCol>

                  {/*Seccion 3 - REDES E SITES*/}
                  <MDBCol md="3" lg="3" xl="2" className="me-auto pb-3">
                    <h6 className="text-uppercase fw-bold mb-3 text-reset">
                      REDES E SITES
                    </h6>
                    <Link
                      href="https://www.instagram.com/computacaofametro/"
                      target="_blank"
                      className="me-3 text-reset"
                    >
                      <BsInstagram size={25} />
                    </Link>
                    <Link
                      href="https://fametro.edu.br/"
                      target="_blank"
                      className="me-3 text-reset"
                    >
                      <BsWindow size={25} />
                    </Link>
                    <Link
                      href="https://www.flowcode.com/page/computacaofametro"
                      target="_blank"
                      className="text-reset"
                    >
                      <BsLink45Deg size={25} />
                    </Link>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              {/*End Content*/}
            </MDBRow>
            {/*End MDBContainer*/}
          </MDBContainer>
        </section>

        {/*Bottom Footer*/}
        <MDBContainer fluid className="pt-2 pb-3 text-center">
          <MDBRow className="justify-content-between p-4">
            <div className="xxl:text-center text-reset mb-2">
              Designed and developed by{" "}
              <Link target="_blank" href="https://junowoz.github.io/portfolio/">
                @junowoz
              </Link>
            </div>
            <div className="xxl:text-center text-reset mb-4">
              2023 © Inovatec. Todos os direitos reservados{" "}
            </div>
          </MDBRow>
        </MDBContainer>
      </div>
    </MDBContainer>
  );
};

export default Footer;
