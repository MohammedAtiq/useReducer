import React, { useContext } from 'react'
import { CardContext } from './Context'
import { IoBagAddSharp } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";

const SinglCard = ({ prod }) => {

    const { state: { cartStore }, dispatch } = useContext(CardContext)

    return (
        <>

            <div className="col">
                <div className="card h-100 maincard" >
                    <img src={prod.image} className="card-img-top border " alt="img" style={{ height: "18rem", width: "15rem", margin: '10px auto' }} />
                    <div className="card-body">
                        <h5 className="card-title">{prod.category
                        }</h5>
                        <p className="card-text">{prod.title}</p>
                        
                    </div>
                    <div className="card-footer">
                    <span className="price">$ :{prod.price}</span>
                    <span className="creat">
                        {
                            cartStore.some((p) => p.id === prod.id)
                                ?
                                (<button onClick={() => { dispatch({ type: 'REMOVE_TO_CART', payload: prod, }) }} className="btn "><AiFillDelete className='icon1'/></button>) :
                                (<button onClick={() => { dispatch({ type: 'ADD_TO_CART', payload: prod, }) }} className="btn "><IoBagAddSharp className='icon2'/></button>)

                        }
                        </span>
                       
                    </div>
                </div>
            </div>

        </>
    )
}

export default SinglCard
