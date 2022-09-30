import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CardContext } from './Context'


const Navbar = () => {

  const { state: { cartStore }, dispatch } = useContext(CardContext)


  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <Link className="navbar-brand" to="/Home2">Home2</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 btn-group dropstart">
              <li className="nav-item">
                <li class="nav-item dropdown">
                  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">

                  </button>
                  <Link className="navbar-brand" to="/Cart">Cart {cartStore.length}</Link>
                  <ul class="dropdown-menu">
                    {
                      cartStore.length > 0 ? (
                        <>
                          <Link className="navbar-brand" to="/Cart"> <button type="button" class="btn btn-primary" >go to cart </button></Link>
                          {
                            cartStore.map((cardProd) => {
                              return <span className="d-block" key={cardProd.id}>
                                <img src={cardProd.image} alt="img" style={{ height: "5rem" }} />
                                <p>{cardProd.price}</p>
                                <button onClick={() => { dispatch({ type: 'REMOVE_TO_CART', payload: cardProd, }) }} class="btn btn-danger">Remove</button>
                              </span>
                            })
                          }
                        </>
                      ) : (<><span>empty</span></>)
                    }
                  </ul>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}


      <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3">
        <div class="container-xl max-w-screen-xl">

        <Link className="navbar-brand" to="/Home2">Navbar</Link>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarCollapse">

            <ul class="navbar-nav mx-lg-auto">
              <li class="nav-item">
              <Link className="nav-link" to="/Home2">Home2</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">Product</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">Pricing</a>
              </li>
            </ul>

            <div class="navbar-nav ms-lg-4">
            <li className="nav-item">
                <li class="nav-item dropdown">
                  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">

                  </button>
                  <Link className="navbar-brand" to="/Cart">Cart {cartStore.length}</Link>
                  <ul class="dropdown-menu">
                    {
                      cartStore.length > 0 ? (
                        <>
                          <Link className="navbar-brand" to="/Cart"> <button type="button" class="btn btn-primary" >go to cart </button></Link>
                          {
                            cartStore.map((cardProd) => {
                              return <span className="d-block" key={cardProd.id}>
                                <img src={cardProd.image} alt="img" style={{ height: "5rem" }} />
                                <p>{cardProd.price}</p>
                                <button onClick={() => { dispatch({ type: 'REMOVE_TO_CART', payload: cardProd, }) }} class="btn btn-danger">Remove</button>
                              </span>
                            })
                          }
                        </>
                      ) : (<><span>empty</span></>)
                    }
                  </ul>
                </li>
              </li>
            </div>

           
          </div>
        </div>
      </nav>

    </>

  )
}

export default Navbar