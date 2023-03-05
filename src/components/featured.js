import {useMemo} from "react";

const ProductCard = ({ name, imageUrl, price }) => (
    <div className={"w-72 h-96 bg-[#fff] p-8 rounded-lg shadow-lg"} >

        <div className={"flex justify-center"} >
            <img
                src={imageUrl}
                alt={name}
                className={"h-40 object-cover"}
            />
        </div>

        <br />

        <p className={"font-semibold text-xl text-center"} > {name} </p>
        <p className={"text-center mt-2"} >{price} </p>

        <div className={"flex justify-center mt-8"} >
            <button
                className="mb-2 w-96 h-12 mb-2 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Shop Featured Product
            </button>
        </div>
    </div>
)


function Featured({ products }) {
    const featuredProducts = useMemo(
        () => products?.filter(item => item?.fields?.isfeatured),
        [products])

    return (
        <div className={"max-w-7xl m-0 m-auto"} >
            <div className={"bg-[#95D6DF] rounded p-12"} >
               <div className={"mb-8"} >
                   <h1 className={"text-center text-5xl mb-4"} > Featured Products </h1>
                   <p className={"text-center text-lg mb-8"}  > Our hand-crafted best selling dresses </p>
                   <hr />
               </div>

                <br />

                {
                    featuredProducts?.length === 0 ? (
                        <div className={"text-center"} >
                            <p> We do not have featured products at the moment. <br /> Check back soon! </p>
                        </div>
                    ) :
                        (
                            <ul style={{ gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))" }} className={"grid"} >
                                {
                                    featuredProducts?.map(({ name, fields, description,  }, idx) => (
                                        <li key={idx} >
                                            <ProductCard {...{name, description, price : fields?.price, imageUrl: fields?.image}} />
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                }


            </div>
        </div>
    )
}

export default Featured