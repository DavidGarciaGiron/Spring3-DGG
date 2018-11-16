import React, { Component } from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand><a href="/#/dashboard">BLT</a></AppNavbarBrand>
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/">Pagina Principal</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/users">Usuarios</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Configuracion </NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>

          <AppHeaderDropdown direction="down">

            <DropdownToggle nav>
              <AppNavbarBrand><h5>Bienvenido, </h5></AppNavbarBrand>
              <img src={'assets/img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>Cuentas</strong></DropdownItem>
              <DropdownItem><i className="fa fa-bell-o"></i> Actualizaciones<Badge color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Mensajes<Badge color="success">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Comentarios<Badge color="warning">42</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Configuracion</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Perfiles</DropdownItem>
              <DropdownItem><i className="fa fa-lock"></i> <a href="/#/login/">Logout</a></DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
