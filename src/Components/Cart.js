import React, { useContext, useState, useEffect } from 'react'
import { CardContext } from './Context'
const Cart = () => {

  const { state: { cartStore }, dispatch } = useContext(CardContext)

  const [total, setTotal] = useState()

  useEffect(() => {
    setTotal(
      cartStore.reduce((accrOneValue, cartData) => accrOneValue + Number(cartData.price) * cartData.qty, 0))
  }, [cartStore]);



  return (
    <>
      <div className="contaoner">
        <div className="row">
          <div className="col-sm-10 border">
            <table class="table">
              <tbody>

                {
                  cartStore.map((cardProd) => {
                    return (
                      <tr key={cardProd.id}>
                        <th><img src={cardProd.image} alt="img" style={{ height: "10rem" }} /></th>
                        <td>{cardProd.title}</td>
                        <td>


                          <select class="form-select" aria-label="Default select example" value={cardProd.qty}
                            onChange={(e) => dispatch({
                              type: "CHANGE_QTY",
                              payload: {
                                id: cardProd.id,
                                qty: e.target.value
                              }
                            })}
                          >

                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>
                        </td>


                        <td>$ :{cardProd.price}</td>
                        <td><button onClick={() => { dispatch({ type: 'REMOVE_TO_CART', payload: cardProd }) }} class="btn btn-danger">Remove</button></td>
                      </tr>
                    )
                  })
                }


              </tbody>
            </table>

          </div>
          <div className="col-sm-2">
            total items : {cartStore.length}
            <p>{total}</p>
          </div>
        </div>
      </div >

      <section class="h-100" style={{backgroundColor: "#eee"}}>
  <div class="container h-100 py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-10">

        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
          <div>
            <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
                  class="fas fa-angle-down mt-1"></i></a></p>
          </div>
        </div>


        {
                  cartStore.map((cardProd) => {
                    return (
        <div class="card rounded-3 mb-4">
          <div class="card-body p-4">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-md-2 col-lg-2 col-xl-2">
                <img
                  src={cardProd.image}
                  class="img-fluid rounded-3" alt="Cotton T-shirt"/>
              </div>
              <div class="col-md-3 col-lg-3 col-xl-3">
                <p class="lead fw-normal mb-2">{cardProd.title}</p>
                
              </div>
              <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
               
              <select class="form-select" aria-label="Default select example" value={cardProd.qty}
                            onChange={(e) => dispatch({
                              type: "CHANGE_QTY",
                              payload: {
                                id: cardProd.id,
                                qty: e.target.value
                              }
                            })}
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                          </select>

                
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 class="mb-0">$499.00</h5>
              </div>
              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>

)
})
}

    


        <div class="card">
          <div class="card-body">
            <button type="button" class="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
    </>

  )
}

export default Cart