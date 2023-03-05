 function Banner({ heroText, heroImgUrl }) {

    return (
        <div style={{ height: "750px" }} className={"bg-[#fff5e8] p-8 flex items-center"} >
            <div className={"max-w-7xl m-auto m-0"} >
            <div style={{ gridTemplateColumns: "50% 50%" }} className={'grid'} >
                <div>
                    <p className={"font-semibold"} > BEST RATED </p>
                    {/*<h1 className={"text-left text-6xl leading-snug font-bold"} > SOME CRAZY MISSION TEXT HERE FOR YOU TO SEE </h1>*/}
                    <h1 className={"text-left text-6xl leading-snug font-bold"} > {heroText} </h1>
                    <br />
                    <div>
                        <button
                            className="mb-2 w-96 h-16 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Shop An Item Now
                        </button>
                    </div>
                </div>

                <div className={"flex items-center"} >
                    <img
                        src={heroImgUrl}
                        className={"rounded-lg ml-12"}
                        alt={"Doe's Stored snapshot"}
                    />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Banner