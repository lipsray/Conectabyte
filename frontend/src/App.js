import React from 'react'
import Product from './components/Product';
import data from './data'
import {BrowserRouter, Route} from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  return (    
    <BrowserRouter>
    <div className="grid-container">
            <header className="row">
                <div>
                    <a href="/">Conecta Byte Shop</a> 
                </div>
                    <div>
                        <a href="/cart"className="carrinhoform">Carrinho</a>
                        <a href="/signin"className="entrarform">Entrar</a>               
                    </div>               
            </header>
        
            <main>
                <Route path="/product/:id" component={ProductScreen}></Route>
                <Route path="/" component={HomeScreen} exact></Route>                           
            </main>
            <footer className="row center">
                Todos os direitos reservados.       #Conectabyteshop LTDA
            </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
