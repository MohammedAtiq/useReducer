import React, { useContext, useState } from 'react'
import { CardContext } from './Context'
import SinglCard from './SinglCard';

const Home2 = () => {

    const { state: { products } } = useContext(CardContext);
    console.log(products)

    const [search, setSearch] = useState("")
    return (
        <>

            <div className="bgImg">
                <div class="pt-24 pb-32">
                    <div class="container-lg max-w-screen-xl">

                        <div class="row g-6 align-items-center ">
                            <div class="col-lg-7 mx-auto text-lg-center mt-5 text-white">

                                <h1 class="ls-tight font-bolder display-4 mb-7">
                                    Get your design skills to new heights
                                </h1>

                                <p class="lead mb-12">
                                    Plan, build and launch beautiful and consistent user interfaces for the web that drives meaningful engagement and growth for your brand.
                                </p>

                                <form class="w-2/3 mx-auto ">
                                    <div class="rounded px-2 py-2 border shadow mt-5">
                                        <div class="row">
                                            <div class="col">
                                                <input class="form-control pl-3 shadow-none bg-transparent border-0"
                                                    type="text"
                                                    placeholder="search..."
                                                    onChange={(e) => setSearch(e.target.value)} />
                                            </div>
                                            <div class="col-auto">
                                                <button type="submit" class="btn btn-block btn-dark">Notify me</button>
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
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        

                            {
                                products.filter((value) => {
                                    if (search === "") {
                                        return value;
                                    } else if (
                                        value.category.toLowerCase().includes(search.toLowerCase())
                                    ) {
                                        return value
                                    }
                                })
                                    .map((prod) => {
                                        return <SinglCard prod={prod} key={prod.id} />
                                    })
                            }

                            
                        </div>
                    </div>
                </div>
            
        </>

    )
}

export default Home2
