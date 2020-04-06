import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, FormGroup, Label, Input} from 'reactstrap';

import logo from '../logo.svg';
// import searchIcon from '../searchIcon.svg'

class MenuItem extends React.Component {
    constructor(props) {
        super(props);
  
        this.toggle = this.toggle.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }
  
    toggle() {
        this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
        }));
    }
  
    onMouseEnter() {
        this.setState({dropdownOpen: true});
    }
  
    onMouseLeave() {
        this.setState({dropdownOpen: false});
    }
  
    render() {
      if (this.props.dropdown) {
        return (
          <Dropdown className={"d-inline-flex h-100 justify-content-center align-items-center"}  onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle className={this.state.dropdownOpen ? 'dropdown-open' : 'dropdown-closed'}>{this.props.name}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="#">Financial Services</DropdownItem>
              <DropdownItem href="#">Market Qualifications</DropdownItem>
              <DropdownItem href="#">Onboarding Resources</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        );
      }
      else if (this.props.button) {
        return (
          <a href={this.props.link} className="button">{this.props.name}</a>
        );
      }
      else {
        return (
          <a className="navbar-item" href={this.props.link}>{this.props.name}</a>
        );
      }
    }
}

class Header extends React.Component {

  render() {
    return (
      <nav className='navbar navbar-expand-lg'>
        <Row className="w-100">
          <Col className="col-lg-8 d-inline-flex">
            <a className='navbar-brand' href='/'>
              <img src={logo} />
            </a>
            <Col className="d-lg-flex d-none justify-content-start align-items-center">
              <MenuItem name="Use Cases" link="our-cases" dropdown />
              <MenuItem name="Our Data" link="our-cases" dropdown />
              <MenuItem name="About Us" link="our-cases" dropdown />
            </Col>
          </Col>
          <Col className="d-lg-flex d-none justify-content-end align-items-center">
            <MenuItem name="Sign In" link="our-cases" />
            <MenuItem name="Get Started" link="register" button />
          </Col>
          <Col className="col-lg d-flex d-lg-none justify-content-end align-items-center">
            <button className="menu-hamburger">
              <span className="menu-line top"></span>
              <span className="menu-line bottom"></span>
            </button>
          </Col>
        </Row>
      </nav>
    )
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <FormGroup>
        {/* <Label for="exampleSearch"><img src={searchIcon}></img></Label> */}
        <Input
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="search datasets"
          autoComplete="off"
        />
      </FormGroup>
    )
  }
}

class HeaderWithSearchBar extends React.Component {

  render() {
    return (
      <React.Fragment>
      <nav className="supernav">
        <Row>
          <Col className="d-flex align-items-center">
            <span className="navbar-item">Storytelling with data.</span>
          </Col>
          <Col className="menu-items">
            <MenuItem name="Use Cases" link="our-cases" />
            <MenuItem name="Our Data" link="our-cases" />
            <MenuItem name="About Us" link="our-cases" />
          </Col>
        </Row>
      </nav>
      <nav className='navbar navbar-expand-lg withSearchBar'>
        <Row className="w-100">
          <Col className="col-lg-8 d-inline-flex">
            <a className='navbar-brand' href='/'>
              <img src={logo} />
            </a>
            <Col className="searchBar d-lg-flex d-none justify-content-start align-items-center">
              <SearchBar />
            </Col>
          </Col>
          <Col className="d-lg-flex d-none justify-content-end align-items-center">
            <MenuItem name="Sign In" link="our-cases" />
            <MenuItem name="Get Started" link="register" button />
          </Col>
          <Col className="col-lg d-flex d-lg-none justify-content-end align-items-center">
            <button className="menu-hamburger">
              <span className="menu-line top"></span>
              <span className="menu-line bottom"></span>
            </button>
          </Col>
        </Row>
      </nav>
      </React.Fragment>
    )
  }
}

export { Header, HeaderWithSearchBar };