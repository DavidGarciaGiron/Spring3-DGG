import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import './RegisterProv.css';
class RegisterProv extends Component {
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
                  <h1 class="col-md-8">REGISTRO PROVEEDOR</h1>
                  <hr/>
                  <p class="col-md-8">Ingresa los datos correctamente para un correcto registro</p>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i class="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Nombre de Empresa" required/>
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-doc"></i>
                      </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Ingrese su RUC" required/>
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-email">@</i>
                      </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Ingrese su Correo Electronico" required/>
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-key"></i>
                      </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Ingrese su Contraseña" required/>
                    </InputGroup>

                    <Button color="success" block><a href="/#/login" class="btn-ingresar">REGISTRAR</a></Button>
                    <Button type="reset"color="info" block><a href="#" class="btn-ingresar">BORRAR</a></Button>


                  </form>
                </div>
            <div class="izquierda col-md-6">
                <img src="https://gifimage.net/wp-content/uploads/2017/10/clientes-gif-7.gif" class="gif" />
            </div>
            </div>
            </body>


      </div>
    );
  }
}

export default RegisterProv;
