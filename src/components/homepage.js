import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Fade from 'react-reveal/Fade';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDatabase, faCircle, faEye, faDownload, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Header } from "./header"
import Footer from "./footer"

class Homepage extends React.Component {
    render() {
  
      let cardsList = [1,2,3].map(card => {
        return (
          <Card style={{ width: '18rem' }}>
            <a href="/dataset/spotify">
            <Card.Header>
              <img src="https://www.benlcollins.com/wp-content/uploads/2016/01/spotify.png" />
              <Card.Title>Spotify Top Charts</Card.Title>
            </Card.Header>
            {/* <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_171381dbaf7%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_171381dbaf7%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.53125%22%20y%3D%2297.35%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" /> */}
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            <Card.Footer>
              <div className="card-footer-item">
                <FontAwesomeIcon icon={faCircle} color="#2171d1" />
                <span>Free</span>
              </div>
              <div className="card-footer-item">
                <FontAwesomeIcon icon={faEye} color="#000000a6" />
                <span>438</span>
              </div>
              <div className="card-footer-item">
                <FontAwesomeIcon icon={faDatabase} color="#000000a6" />
                <span>4 GB</span>
              </div>
              <div className="card-footer-item">
                <FontAwesomeIcon icon={faDownload} color="#000000a6" />
                <span>19</span>
              </div>
            </Card.Footer>
            </a>
          </Card>
        )
      })
  
  
      return (
        <React.Fragment>
          {/* <Fade top> */}
            <Header />
          {/* </Fade> */}
          <Container>
            {/* <Fade bottom> */}
            <Row className="hero">
              <Col>
                <div className="wrapper">
                  <h1 className="text-lg-left text-center">A better way to build with modern components</h1>
                  <p className="text-lg-left text-center">Bit is a scalable and collaborative way to build and reuse components. It's everything you need from local development to cross-project integrations. Try it for free.</p>
                  <div className="cta justify-content-lg-start">
                    <a className="button" href="#">Get Started</a>
                    <a className="button" href="#">Learn More</a>
                  </div>
                  <div className="brand-logos justify-content-lg-start">
                    <img src="https://static.bit.dev/brands/logo-react.svg"></img>
                    <img src="https://static.bit.dev/brands/logo-vue.svg"></img>
                    <img src="https://static.bit.dev/brands/logo-angular.svg"></img>
                    <img src="https://static.bit.dev/brands/logo-web-components.svg"></img>
                    <img src="https://static.bit.dev/brands/logo-ts.svg"></img>
                    <img src="https://static.bit.dev/brands/logo-js.svg"></img>
                  </div>
                </div>
              </Col>
              <Col className="d-lg-block d-none">
                <div className="wrapper">
                  <img className="hero-image" src="https://static.bit.dev/homepage-bit/flying-man-01.svg" />
                </div>
              </Col>
            </Row>
            {/* </Fade> */}
            {/* <Fade bottom> */}
            <Row className="collections">
              <Col className="featured-collection">
                <Row className="collection-header">
                  <h1 className="collection-title">Featured Datasets</h1>
                  <h6 className="collection-subtitle">Some quick example text to build on the card</h6>
                </Row>
                <Row>{ cardsList }</Row>
                <Row className="collection-footer">
                  <a className="cta" href="">
                    <span>Explore more datasets</span>
                    <FontAwesomeIcon icon={ faArrowRight }/>
                  </a>
                </Row>
              </Col>
            </Row>
            {/* </Fade> */}
          </Container>
          {/* <Footer /> */}
        </React.Fragment>
      )
    }
}

export default Homepage;