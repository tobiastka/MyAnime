import { useEffect, useState } from "react"

const Filter = ({ isManga, setFilter, filter }) => {

    const onSubmit = (e) => {
        e.preventDefault()

    }
    const onChange = ({ target }) => {
        setFilter({
            ...filter,
            [target.name]: target.name === "sort" ? !filter.sort : target.value
        })
    }



    return (
        <form onSubmit={onSubmit} style={{ fontFamily: "'Roboto Condensed', sans-serif" }}>
            <input onChange={onChange} name="letter" className="cursor-pointer text-2xl border-4 border-gray rounded-lg py-4 px-4 leading-tight focus:border-gray-400 focus:outline-none placeholder:text-black hover:border-gray-400" id="inline-full-name" type="text" placeholder="Search by name..." />
            <div className=" cursor-pointer flex flex-row border-4 border-gray rounded-lg mt-2 py-4 px-4 bg-white hover:border-gray-400 focus:outline-none">
                <label className="text-2xl" htmlFor="sortBy">Order by </label>
                <select onChange={onChange} className="flex-1 text-2xl focus:outline-none  rounded-lg" name="orderBy" >
                    <option value="score">Rating</option>
                    <option value="title">Title</option>
                    <option value="start_date">Date</option>
                    {
                        isManga ?
                            <option value="volumes">Volumes</option>
                            :
                            <option value="episodes">Episodes</option>
                    }
                </select>
            </div>
            <div className="cursor-pointer flex flex-row border-4 border-gray rounded-lg mt-2 py-4 px-4 bg-white hover:border-gray-400">
                <label className="text-2xl" htmlFor="sort">Desc</label>
                <input checked={filter.sort} onChange={onChange} className="h-5 w-5 my-auto ml-2" type="checkbox" name="sort" />
            </div>
            <div className=" cursor-pointer flex flex-row border-4 border-gray rounded-lg mt-2 py-4 px-4 bg-white hover:border-gray-400 focus:outline-none">
                <label className="text-2xl" htmlFor="status">Status </label>

                <select onChange={onChange} className="flex-1 text-2xl focus:outline-none  rounded-lg" name="status">
                    <option value=""></option>
                    {isManga ?
                        <>
                            <option value="publishing">Publishing</option>
                            <option value="complete">Finished</option>
                            <option value="hiatus">Hiatus</option>
                            <option value="discontinued">Discontinued</option>
                            <option value="upcoming">Upcoming</option>
                        </>
                        :
                        <>
                            <option value="airing">In broadcast</option>
                            <option value="complete">Finished</option>
                            <option value="upcoming">Upcoming</option>
                        </>
                    }
                </select>
            </div>
            <div className=" cursor-pointer flex flex-row border-4 border-gray rounded-lg mt-2 py-4 px-4 bg-white hover:border-gray-400 focus:outline-none">
                <label className="text-2xl" htmlFor="type">Type </label>
                <select onChange={onChange} className="flex-1 text-2xl focus:outline-none  rounded-lg" name="type">
                    <option value=""></option>
                    {isManga ?
                        <>
                            <option value="manga">Mangas</option>
                            <option value="novel">Novels</option>
                            <option value="lightnovel">LightNovels</option>
                            <option value="oneshot">Oneshots</option>
                            <option value="doujin">Doujins</option>
                            <option value="manhwa">Manhwas</option>
                            <option value="manhua">Manhuas</option>
                        </>
                        :
                        <>
                            <option value="tv">Animes</option>
                            <option value="movie">Movies</option>
                            <option value="ova">OVA</option>
                            <option value="special">Special</option>
                            <option value="ona">ONA</option>
                            <option value="music">Music</option>
                        </>
                    }
                </select>
            </div>
        </form>
    )
}

export default Filter