import React from 'react';
import { Container, Form, Button, Col, Card } from 'react-bootstrap';

class Ejercicio2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Titulo: '',
      Autor: '',
      FechaPublicacion: '',
      Paginas: 0,
      URLImagen: '',
      Idioma: '',
    };
    this.login = this.login.bind(this);
    this.inputTitulo = React.createRef();
    this.inputAutor = React.createRef();
    this.inputFecha = React.createRef();
    this.inputPagina = React.createRef();
    this.inputURLImagen = React.createRef();
    this.inputIdioma = React.createRef();
  }

  login() {
    this.setState({
      Titulo: this.inputTitulo.current.value,
      Autor: this.inputAutor.current.value,
      FechaPublicacion: this.inputFecha.current.value,
      Paginas: this.inputPagina.current.value,
      URLImagen: this.inputURLImagen.current.value,
      Idioma: this.inputIdioma.current.value,
    });
  }

  render() {
    return (
      <div id="ej2">
        <h2>Ejercicio 2</h2>
        <ul>
          <li>
            Crea un formulario para añadir información sobre libros a una lista.
            Ha de tener los siguientes campos:<b> - 1,25 puntos</b>
            <ul>
              <li>Título</li>
              <li>Autor</li>
              <li>Fecha de publicación (selector de fecha) </li>
              <li>Número de paginas (input numérico)</li>
              <li>Portada (URL de imagen)</li>
              <li>Idioma </li>
            </ul>
            Los elementos añadidos se irán introduciendo dentro de un Container
            de React-Bootstrap
            <li>
              Crea un componente <i>Libro</i> para mostar los elementos que
              vayas añadiendo. El componente ha de implementar{' '}
              <a href="https://react-bootstrap.github.io/components/cards/">
                Card
              </a>{' '}
              de React-Bootstrap y mostrar todos los campos añadidos
              <b> - 1,75 puntos</b>
            </li>
          </li>
        </ul>
        <h1>
          ------------------------------------------------------------------------------------------------------------------------------------------
        </h1>
        <Container>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Título:</Form.Label>
              <Form.Control type="text" ref={this.inputTitulo} />
            </Form.Group>
            <br />
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Autor</Form.Label>
              <Form.Control type="text" ref={this.inputAutor} />
              <br />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Fecha de publicación</Form.Label>
              <Form.Control type="date" ref={this.inputFecha} />
              <br />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Páginas</Form.Label>
              <Form.Control type="number" ref={this.inputPagina} />
              <br />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>URL imagen</Form.Label>
              <Form.Control type="url" ref={this.inputURLImagen} />
              <br />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Idioma</Form.Label>
              <Form.Control type="text" ref={this.inputIdioma} />
              <br />
            </Form.Group>
            {console.log(this.state.Autor)}
            <br />
            <Button variant="primary" type="button" onClick={this.login}>
              Enviar
            </Button>
          </Form>
          <br />
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.state.URLImagen} />
            <Card.Body>
              <Card.Title>Título: {this.state.Titulo}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Autor: {this.state.Autor}{' '}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Fecha de publicación: {this.state.FechaPublicacion}{' '}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Paginas: {this.state.Paginas}{' '}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Idioma: {this.state.Idioma}{' '}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Ejercicio2;
