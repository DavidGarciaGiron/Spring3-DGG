import React, { Component } from 'react';

import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import './Login.css';
import { Bar, Line } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';


class Login extends Component {


  render() {
    return (

      <div class="cuerpo">
              <header className="App-header">
                <h1 className="pos-left">BLOCKCHAIN, LOGISTICA Y TRANSPORTE</h1>
              </header>
            <body class="col-md-12">
            <div class="formulario-login col-md-12">
              <div class="derecha col-md-6">
                  <form>
                  <h1 class="col-md-6">INICIAR SESIÓN</h1>
                  <hr/>
                  <p class="col-md-8">Ingresa los datos correctamente</p>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-list"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <select class="form-control">
                        <option>Seleccionar...</option>
                        <option value="Usuario Cliente">Usuario Cliente</option>
                        <option value="Usuario Proveedor">Usuario Proveedor</option>
                        <option value="Usuario Administrador">Usuario Administrador</option>
                      </select>
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user"></i>
                      </InputGroupText>
                      </InputGroupAddon>
                      <Input type="number" placeholder="Ingrese DNI o RUC" reqeuired/>
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Ingrese su Contraseña" autoComplete="new-password" />
                    </InputGroup>

                    <Button color="success" block><a href="/#/dashboard" class="btn-ingresar">INGRESAR</a></Button>
                    <Button color="info" block><a href="/#/registerCli" class="btn-ingresar">REGISTRO CLIENTE</a></Button>
                    <Button color="info" block><a href="/#/registerProv" class="btn-ingresar">REGISTRO PROVEEDOR</a></Button>
                  </form>
                </div>
            <div class="izquierda col-md-6">
                <img src="https://www.realdolmen.com/sites/default/files/uploads/blog/BlockChain-Animated-Proof.gif" class="gif" />
            </div>
            </div>
            </body>


      </div>



    );
  }
}

export default Login;
