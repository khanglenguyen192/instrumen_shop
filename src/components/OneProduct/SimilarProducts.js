import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ExProductWrapper } from '../../container/ProductWrapper';
import { Title, Container } from './SimilarProductsElement';

class ExProduct extends Component {
    render() {
      const { id, title, img, price } = this.props;
      return (
        <ExProductWrapper className="col-8 col-md-5 col-lg-3 my-3 col-grid">
          <div className="card prodCard">
            <div className="img-container p-5">
              <Link to="/">
                <img src={img} alt="products" className="card-img-top" id={id} />
              </Link>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <ul className="list-group list-group-flush text-center">
                <Link to="/" className="link">
                  <li className="list-group-item">
                    <p className="align-self-center mb-0">{title}</p>
                  </li>
                </Link>
                <li className="list-group-item">
                  <h5 className="font-italic mb-0">{price}</h5>
                </li>
              </ul>
            </div>
          </div>
        </ExProductWrapper>
      );
    }
  }
  
  
export function OneSimilarPro(){
    return (
    <ExProduct
    id= '1'
    title='Guitar abc'
    img='https://musictalent.vn/wp-content/uploads/2021/07/up_product_u1_po-ebo_515766315cc831ac24d247b9585d1296.jpg'
    price='30000VND' >
    </ExProduct>
    //id, title, img, price 
    );
}

export default function SimilarProducts(){
    return(
      <React.Fragment>
        <Title>Similar product</Title>
        <Container>
        <OneSimilarPro />
        <OneSimilarPro />
        <OneSimilarPro />
        <OneSimilarPro />
        </Container>
      </React.Fragment>
    );

}