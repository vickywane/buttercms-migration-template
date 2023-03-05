function Mission({ missionText, missionImgUrl }) {
    return (
        <div className={"flex justify-center"} >
            <div className={"m-24"} >
                <h1 className={"text-center text-5xl mb-8"} > What We Do </h1>

                <div className={"flex justify-center"} >
                    <img
                        alt={"Who are we?"}
                        src={missionImgUrl}
                        className={"h-80 rounded-lg"}
                    />
                </div>

                <br />

                <p className={"max-w-3xl text-left text-lg leading-normal"} >
                    {missionText}
                </p>

            </div>
        </div>
    )
}

export default Mission