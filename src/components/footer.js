import React from 'react';
import { Row, Col } from 'react-bootstrap';

import data from "../data"; 

const footerSecondaryLinks = [
  "Privacy Policy",
  "Support",
  "Terms of Service",
  "Community"
]

class Footer extends React.Component {
    render() {
      let footerSecondaryMenuItems = footerSecondaryLinks.map(link => {
        return <a className="secondary-link" href={link}>{link}</a>
      })
      return (
        <footer>
          <Row>
            <Col>
              { footerSecondaryMenuItems }
            </Col>
          </Row>
        </footer>
      )
    }
}

export default Footer;