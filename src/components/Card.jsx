const Card = (p) => {

    if (p.isCharacter) return (

        <div className="max-w-lg max-h-96 mx-auto flex flex-ropw bg-neutral-100 p-2 rounded-lg box-border hover:cursor-pointer hover:border-sky-600 border-gray border-4 duration-500">
            <img className="w-1/2 mr-1" src={p.images.jpg.image_url} alt="Sunset in the mountains" />
            <div className="flex-1 flex flex-col items-center" >
                <div className="flex flex-col text-center mx-2 items-center justify-center flex-1 max-w-xs " >
                    <span className="font-sans font-semibold text-4xl overflow-clip max-h-20 text-sky-600" style={{ fontFamily: "'Bebas Neue'" }}>
                        {p.name}
                    </span>
                    <span className="font-sans font-semibold text-2xl overflow-hidden max-h-8" style={{ fontFamily: "'Bebas Neue'" }}>
                        {p.nameKanji}
                    </span>
                </div>
                <div className="border-t-2 border-sky-600 pt-2 text-md overflow-auto" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
                    {p.about}

                </div>

            </div>
        </div>
    )

    return (
        <div className="max-w-xl flex flex-ropw bg-neutral-100 p-2 rounded-lg box-border hover:cursor-pointer hover:border-sky-600 border-gray border-4 duration-500">
            <img className="max-w-fit rounded-lg mr-1" src={p.images.jpg.image_url} alt="Sunset in the mountains" />
            <div className="flex-1 flex flex-col items-center" >
                <div className="flex flex-col text-center mx-2 items-center justify-center flex-1 max-w-xs " >
                    <span className="font-sans font-semibold text-4xl overflow-clip max-h-20 text-sky-600" style={{ fontFamily: "'Bebas Neue'" }}>
                        {p.title}
                    </span>
                    <span className="font-sans font-semibold text-2xl overflow-clip max-h-14" style={{ fontFamily: "'Bebas Neue'" }}>
                        {(p.title !== p.title_english && p.title_english) && p.title_english}
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-auto border-t-2 border-sky-600 pt-2" style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
                    <div className="flex flex-col text-center">
                        <span className="text-4xl font-semibold text-sky-600">Score</span>
                        <span className="text-2xl font-semibold">{p.score}</span>
                    </div>
                    <div className="flex flex-col text-center ">
                        <span className="text-4xl font-semibold text-sky-600">{p.cardIsManga ? "Type" : "Year"}</span>
                        <span className="text-2xl font-semibold">{p.cardIsManga ? p.type : (p.year ? p.year : "Not defined")}</span>
                    </div>
                    <div className="flex flex-col text-center ">
                        <span className="text-4xl font-semibold text-sky-600">Status</span>
                        <span className="text-2xl font-semibold">{p.status === "On Hiatus" ? "Pause" : p.status.split(" ")[0]}</span>
                    </div>
                    <div className="flex flex-col text-center ">
                        <span className="text-4xl font-semibold text-sky-600">{p.cardIsManga ? "Volumes" : "Episodes"}</span>
                        <span className="text-2xl font-semibold">{p.cardIsManga ? (p.volumes || "Not defined") : p.episodes}</span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Card