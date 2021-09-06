import React from 'react'
import data from '../data'
import Product from '../components/Product';
import Rating from '../components/Rating'
import { Link } from 'react-router-dom';

export default function ProductScreen(props) {
    const product = data.products.find(x => x._id === props.match.params.id);
    if (!product){
        return <div>Produto não encontrado :-(</div>
    }
    return (
    <div>
    <Link to ="/">Retornar aos resultados</Link>
      <div className="row top">
          <div className="col-2">
              <img className="large" src={product.image} alt={product.name}></img>

          </div>
          
          <div className="col-1">
              <ul>
                  <li>
                      <h1>
                          {product.name}
                      </h1>
                  </li>
                  <li>
                      <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                  </li>
                  <li>
                      Preço: R${product.price}
                  </li>
                  <li>
                      <p>Descrição:{product.description}</p>
                  </li>
              </ul>
          </div>

          <div className="col-1">
              <div className="card card-body">
                  <ul>
                      <li>
                          <div className="row">
                              <div> Preço </div>
                              <div className="price">R${product.price}</div>
                          </div>
                      </li>
                      <li>
                          <div className="row">
                              <div> Status </div>
                              <div>{product.countInStock>0?
                              <span className="success">Em estoque</span>:
                              <span className="error">Indisponível</span>}

                              </div>
                          </div>
                      </li>
                      <li>
                          <button className="primary block">Adicionar ao carrinho</button>
                      </li>
                  </ul>
              </div>

          </div>
      </div>
    </div>
    )
}
