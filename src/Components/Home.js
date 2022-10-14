import React, { useContext, useState } from 'react'
import { CardContext } from './Context'
import SinglCard from './SinglCard';
import { FaSearch } from "react-icons/fa"

const Home = () => {

    const { state: { products } } = useContext(CardContext);


    const [search, setSearch] = useState("")
    return (
        <>

            <div className="bgImg mt-5">
                <div className="pt-24 pb-32 text-center">
                    <div className="container-lg max-w-screen-xl">

                        <div className="row g-6 align-items-center ">
                            <div className="col-lg-7 mx-auto text-lg-center mt-5 text-white">

                                <h1 className="ls-tight font-bolder display-4 mb-7">
                                    Get your desiging Cloths in Super
                                </h1>

                                <p className="lead mb-12">
                                    Plan, build and launch beautiful and consistent user interfaces for the web that drives meaningful engagement and growth for your brand.
                                </p>

                                <form className="w-2/3 mx-auto search">
                                    <div className="rounded px-2 py-2 border shadow mt-5">
                                        <div className="row">
                                            <div className="col">
                                                <input className="form-control pl-3 shadow-none bg-transparent border-0 "
                                                    type="text"
                                                    placeholder="search..."
                                                    onChange={(e) => setSearch(e.target.value)} />
                                            </div>
                                            <div className="col-auto">
                                                <button type="submit" className="btn btn-block btn-dark"><FaSearch /></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <h1 className="text-center mt-5">PROUCTS</h1>


            <div>

                <div className="container mx-auto mt-4">
                    <div className="row row-cols-1 row-cols-md-3 g-4">


                        {
                            products.filter((value) => {
                                if (search === "") {
                                    return value;
                                } else if (value.category.toLowerCase().includes(search.toLowerCase())) {
                                    return value
                                }
                            }).map((prod) => {
                                return <SinglCard prod={prod} key={prod.id} />
                            })
                        }

                    </div>
                </div>
            </div>

        </>

    )
}

export default Home
