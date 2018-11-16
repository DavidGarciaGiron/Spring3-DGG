//importar react component, button
import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {Badge, Button, ButtonDropdown, ButtonGroup, ButtonToolbar, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Progress, Row, Table,}
from 'reactstrap';
import './Dashboard.css';

import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'


const Loading = () => <div>Loading...</div>

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.state = {dropdownOpen: false,radioSelected: 2,};
  }
  toggle() {this.setState({dropdownOpen: !this.state.dropdownOpen,});
  }
  onRadioBtnClick(radioSelected) {this.setState({radioSelected: radioSelected,});
  }
  render() {

    return (
      <div className="animated fadeIn">
        <div class="contenedor">
        <h1>Pagina Prnicipal</h1>
        <hr/>
        </div>
      </div>
    );
  }
}

export default Dashboard;
