import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Carrousel extends React.Component{
  constructor(props) {
    super(props);
    this.data = props.data;
  }
  render(){
    if(this.props.data !=null){
    return(
      
      
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={this.props.data.cover}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>a</h3>
          <p>aadda</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
    }else{
      return(<h1>hg</h1>);
    }
  }
}
export default Carrousel;