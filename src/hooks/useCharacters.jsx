import { useState, useEffect } from 'react';

const useCharacters = () => {
    const INITIAL_PAGE = 1;
    const [characters, setCharacters] = useState([])
    const [active, setActive] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)
    const [input, setInput] = useState("")
    useEffect(() => {
        setPage(INITIAL_PAGE)
        const apiR = setTimeout(() => {
            fetch(`https://api.jikan.moe/v4/characters?letter=${input}`)
                .then(r => r.json())
                .then(r => {
                    setCharacters(r.data)
                    setActive(true)
                })
        }, 500);
        return () => clearTimeout(apiR)
    }, [input])
    useEffect(() => {
        if (page === INITIAL_PAGE) return

        fetch(`https://api.jikan.moe/v4/characters?letter=${input}&page=${page}`)
            .then(r => r.json())
            .then(r => {
                setCharacters(oldCharacters => [...oldCharacters, ...r.data])
            })
    }, [page])

    return {
        active, characters, setPage, input, setInput
    }
}

export default useCharacters