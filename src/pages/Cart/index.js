import React from 'react';
import * as CartActions from '../../store/modules/cart/actions'
import {MdRemoveCircleOutline,MdAddCircleOutline,MdDelete} from 'react-icons/md'
import {bindActionCreators} from 'redux'
import {Container,ProductTable,Total} from './styles'
import { connect } from 'react-redux'
import {formatPrice} from '../../util/format'
function Cart({cart,total,removeFromCart,updateAmountRequest}) {
  function increment(product){
    updateAmountRequest(product.id,product.amount + 1)
  }
  function decrement(product){
    updateAmountRequest(product.id,product.amount - 1)
  }
  return(
  <Container>
      <ProductTable>
        <thead>
          <tr>
            <th/>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Sub-total</th>
            <th/>
          </tr>
        </thead>
        <tbody>
            {cart.map(product=>(
              <tr>
              <td>
                <img src={product.image}
                alt="tenis"></img>
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
              <div>
              <button type='button' onClick={()=>decrement(product)}>
                <MdRemoveCircleOutline size={20} color="#7159c1"/>
              </button>
              <input type="number" readOnly value={product.amount}/>
              <button type='number' onClick={()=>increment(product)}>
                <MdAddCircleOutline size={20} color="#7159c1"/>
              </button>
              </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button type="button" onClick={()=>removeFromCart(product.id)}>
                  <MdDelete size={20} color="#FF0000"></MdDelete>
                </button>
              </td>
          </tr>
           ))}
        </tbody>
      </ProductTable>
    <footer>
      <button type="button" >Finalizar pedido</button>
    
    <Total>
      <span>Total </span>
      <strong>{total}</strong>
    </Total>
    </footer>
  </Container>
  );
}
 const mapStateToProps = state => ({
   cart:state.cart.map(product=>({
   ...product,
   subtotal:formatPrice(product.price * product.amount),
   })),
   total:formatPrice(state.cart.reduce((total,product)=>{
     return total + (product.price*product.amount)
   },0))
 });
 const mapDispatchToProps=dispatch=> bindActionCreators(CartActions,dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Cart);