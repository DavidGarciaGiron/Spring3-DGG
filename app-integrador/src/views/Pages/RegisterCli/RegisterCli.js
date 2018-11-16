import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import './RegisterCli.css';
class RegisterCli extends Component {
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
                  <h1 class="col-md-8">REGISTRO CLIENTE</h1>
                  <hr/>
                  <p class="col-md-8">Ingresa los datos correctamente para un correcto registro</p>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i class="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Nombre Completo" required/>
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-email">@</i>
                      </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Correo Electronico" required/>
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-list"></i>
                      </InputGroupText>
                      </InputGroupAddon>
                      <Input type="number" placeholder="Ingrese su DNI" required/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-map"></i>
                      </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Direccion" required/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-key"></i>
                      </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Contraseña" required/>
                    </InputGroup>

                    <Button color="success" block><a href="/#/login" class="btn-ingresar">REGISTRAR</a></Button>
                    <Button type="reset"color="info" block><a href="#" class="btn-ingresar">BORRAR</a></Button>


                  </form>
                </div>
            <div class="izquierda col-md-6">
                <img src="https://files.paredro.com/uploads/2018/03/35622410515065.560e61dc337d1.gif" class="gif" />
            </div>
            </div>
            </body>


      </div>
    );
  }
}

export default RegisterCli;
