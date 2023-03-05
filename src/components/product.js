import {useMemo} from "react";

const ProductCard = ({ name, price, imgUrl }) => (
    <div>
        <div className={"flex justify-center"} >
            <div className={"w-72 h-72 bg-gray-300 p-8 shadow-lg"} >
                <img
                    src={imgUrl}
                    alt={name}
                    className={"h-full object-cover"}
                />
            </div>
        </div>

        <br />

        <p className={"font-semibold text-xl text-center"} > {name} </p>
        <p className={"text-center mt-2"} >{price} </p>
    </div>
)

function Products({products}) {
    const unFeaturedProducts = useMemo(
        () => products?.filter(item => !item?.fields?.isfeatured),
        [products])

    return (
        <div className={"max-w-7xl m-0 m-auto"} >
            <div className={"rounded p-12"} >
                <h1 className={"text-center text-5xl mb-8"} > Available Products </h1>

                <br />

                <ul style={{ gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))" }} className={"grid gap-8"} >
                    {
                        unFeaturedProducts?.map(({  fields }, idx) => (
                            <li key={idx} >
                                <ProductCard {...{ name : fields?.name, price: fields?.price, imgUrl: fields?.image}} />
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}

export default Products