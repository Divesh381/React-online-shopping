import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    // <footer>
    //   <Container>
    //     <Row className="">
    //       <Col className='justify-content-center text-center py-3'>copyright @copy Abhimaurya
    //     </Col>                             
    //     </Row>
    //   </Container>
    // </footer>
    <footer
    className="text-center text-lg-start text-white"
    style={{backgroundColor: '#1c2331'}}
  >
    <section
      className="d-flex justify-content-between p-4"
      style={{backgroundColor: '#6351ce'}}
    >
      <div className="me-5">
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <a href="" className="text-white me-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-google"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>
    <section className="">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Institute name</h6>
            <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
            />
            <p>
              Here you can use rows and columns to organize your
              footer content. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Teachers</h6>
            <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{width: '60px', backgroundColor: '#7c4dff',height: '2px'}}
            />
            <p>
              <a href="#!" className="text-white">
                Names
              </a>
            </p>
            <p>
              {" "}
              <a href="#!" className="text-white"></a>
            </p>
            <p>
              <a href="#!" className="text-white">
                Names
              </a>
            </p>
            <p>
              {" "}
              <a href="#!" className="text-white">
                Names
              </a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">
              Online Classes Traninig
            </h6>
            <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{width: '60px', backgroundColor: '#7c4dff',height: '2px'}}
            />
            <p>
              {" "}
              <a href="#!" className="text-white">
                CBSE
              </a>
            </p>
            <p>
              <a href="#!" className="text-white">
                NEET
              </a>
            </p>
            <p>
              <a href="#!" className="text-white">
                JEE
              </a>
            </p>
            <p>
              <a href="#!" className="text-white">
                EAMCET
              </a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{width: '60px', backgroundColor: '#7c4dff', height: '2px'}}
            />
            <p>
              <i className="fas fa-home mr-3"></i> India, NY 10012
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> India@example.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print mr-3"></i> + 01 234 567 89
            </p>
          </div>
        </div>
      </div>
    </section>
    <div
      className="text-center p-3"
      style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
    >
      © 2020 Copyright:
      <a className="text-white" href="#">
        Institute Names
      </a>
    </div>
  </footer>
  );
}

export default Footer;
