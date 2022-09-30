import React, { useContext } from 'react'
import { CardContext } from './Context'

const SinglCard = ({ prod }) => {

    const { state: { cartStore }, dispatch } = useContext(CardContext)
    console.log(cartStore)
    return (
        <>
            {/* <div class="col-md-4">
                <div class="card" style={{ width: "18rem", margin: 'auto' }}>
                    <img src={prod.image} class="card-img-top" alt="..." style={{ height: "10rem" }} />
                    <div class="card-body">
                        <h5 class="card-title">{prod.title}</h5>

                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        {
                            cartStore.some((p) => p.id === prod.id)
                                ?
                                (<button onClick={() => { dispatch({ type: 'REMOVE_TO_CART', payload: prod, }) }} class="btn btn-danger">Remove</button>) :
                                (<button onClick={() => { dispatch({ type: 'ADD_TO_CART', payload: prod, }) }} class="btn btn-primary">add</button>)

                        }


                    </div>
                </div>
            </div> */}
            <div class="col">
                <div class="card h-100">
                    <img src={prod.image} class="card-img-top border" alt="..." style={{ height: "18rem", width: "15rem", margin: 'auto' }} />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                        {
                            cartStore.some((p) => p.id === prod.id)
                                ?
                                (<button onClick={() => { dispatch({ type: 'REMOVE_TO_CART', payload: prod, }) }} class="btn btn-danger">Remove</button>) :
                                (<button onClick={() => { dispatch({ type: 'ADD_TO_CART', payload: prod, }) }} class="btn btn-primary">add</button>)

                        }
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default SinglCard
