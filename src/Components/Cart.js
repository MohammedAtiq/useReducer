import React, { useContext, useState, useEffect } from 'react'
import { CardContext } from './Context'
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {

  const { state: { cartStore }, dispatch } = useContext(CardContext)

  const [total, setTotal] = useState()

  useEffect(() => {
    setTotal(
      cartStore.reduce((accrOneValue, cartData) => accrOneValue + Number(cartData.price) * cartData.qty, 0))
  }, [cartStore]);

  console.log(total)

  return (
    <>


      <section className="h-100 mt-5" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <h3 className="fw-normal mb-0 text-black " >Shopping Cart</h3>
              <div className="d-flex justify-content-between align-items-center mb-4">

                <div>
                  <p className="mb-0"><span className="text-muted">Total:</span> <a href="#!" className="text-body">$:  {Math.round(total)}<i
                    className="fas fa-angle-down mt-1"></i></a></p>
                </div>
              </div>


              {
                cartStore.map((cardProd, i) => {
                  return (
                    <div className="card rounded-3 mb-4" key={i}>
                      <div className="card-body p-4">
                        <div className="row d-flex justify-content-between align-items-center">
                          <div className="col-md-2 col-lg-2 col-xl-2" style={{ width: '100px', margin: 'auto' }}>
                            <img
                              src={cardProd.image}
                              className="img-fluid rounded-3" alt="Cotton T-shirt" />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3 cardpera">
                            <p className="lead fw-normal mb-2">{cardProd.title}</p>

                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex ">

                            <select className="form-select" aria-label="Default select example" value={cardProd.qty}
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
                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 ">
                            <h5 className="mb-0 ">$ : {cardProd.price}</h5>

                          </div>

                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <button onClick={() => { dispatch({ type: 'REMOVE_TO_CART', payload: cardProd }) }} className="btn btn-danger"><AiFillDelete /></button>
                          </div>
                        </div>
                      </div>
                    </div>

                  )
                })
              }

              <div className="card">
                <div className="card-body">
                  <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
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