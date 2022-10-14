import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CardContext } from './Context'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const Navbar = () => {

  const { state: { cartStore }, dispatch } = useContext(CardContext)


  return (
    <>


      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3 ">
        <div className="container-xl max-w-screen-xl ">

          <Link className="navbar-brand logo" to="/">Super</Link>

          <div className="cartSec1">
                    <Link className="navbar-brand" to="/Cart"><AiOutlineShoppingCart className="icon" /> {cartStore.length}</Link>
                    <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    </button>
                  </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          

          <div className="collapse navbar-collapse" id="navbarCollapse">

            <ul className="navbar-nav mx-lg-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
            
            </ul>

            <div className="navbar-nav ms-lg-4">
              <li className="nav-item">
                <li className="nav-item dropdown">

                
                    <Link className="navbar-brand cartSec2" to="/Cart"><AiOutlineShoppingCart className="icon" /> {cartStore.length}</Link>

              
                  
                  <button type="button" className="btn btn-secondary dropdown-toggle cartSec2" data-bs-toggle="dropdown" aria-expanded="false">
                  </button>

                  <ul className="dropdown-menu">
                    {
                      cartStore.length > 0 ? (
                        <>

                          {
                            cartStore.map((cardProd) => {
                              return <p className="d-block" key={cardProd.id}>
                                <img src={cardProd.image} alt="img" style={{ height: "3rem",width: "2rem",margin:'5px'}} />
                                <span>$ :{cardProd.price}</span>
                                <button onClick={() => { dispatch({ type: 'REMOVE_TO_CART', payload: cardProd, }) }} className="btn btn"><AiFillDelete className='icon3'/></button>
                              </p>
                             
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