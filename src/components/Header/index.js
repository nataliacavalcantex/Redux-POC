import React from 'react';
import logo from '../../assets/img/logo.png'
import { Container,Cart} from './styles';
import {Link} from 'react-router-dom'
import {MdShoppingBasket} from 'react-icons/md'
import {connect} from 'react-redux'
function Header({cartSize}) {
  return (
  <Container>
      <Link to='/'><img src={logo} alt="natshoes"/></Link>
      <Cart to ='/cart'>
          <div>
              <strong>Meu carrinho</strong>
              <span>{cartSize} Itens</span>
          </div>
          <MdShoppingBasket size={24} color="#fff"></MdShoppingBasket>
      </Cart>
  </Container>)
}

export default connect(state=>({
    cartSize:state.cart.length
}))(Header);