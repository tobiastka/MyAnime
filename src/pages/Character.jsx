import { useEffect, useState } from "react"
import Card from "../components/Card"
import Spinner from "../components/Spinner"
import useCharacters from "../hooks/useCharacters"
import useScroll from "../hooks/useScroll"



const Character = () => {
    const { characters, active, setPage, input, setInput } = useCharacters()
    const { elementRef, onView } = useScroll({})

    useEffect(() => {
        if (!onView) return
        const updatePage = setTimeout(() => {
            setPage(page => page + 1)
        }, 1000);
        return () => clearTimeout(updatePage)
    })

    const inputHander = (e) => {
        setInput(e.target.value);
    }

    return (
        <div className="h-full flex flex-col items-center gap-2">
            <input onChange={inputHander} value={input} placeholder="Search character by name" className="max-w-sm cursor-pointer text-2xl border-4 border-gray rounded-lg py-4 px-4 leading-tight focus:border-gray-400 focus:outline-none placeholder:text-black hover:border-gray-400" type="text" />
            <div className="grid animanga-cols-2 mb-16 gap-5 w-3/4 ">
                {
                    active ?
                        characters.map(({ images, name, name_kanji, favorites, about, mal_id }) => {

                            return <Card
                                key={mal_id}
                                isCharacter={true}
                                images={images}
                                name={name}
                                nameKanji={name_kanji}
                                favorites={favorites}
                                about={about} />
                        })
                        :
                        <Spinner />
                }

            </div>
            <div ref={elementRef}></div>

        </div>
    )

}

export default Character