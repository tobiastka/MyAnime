import { useState, useEffect } from 'react';

const useAnimanga = ({ type }) => {
    const INITIAL_PAGE = 1
    const INITIAL_FILTERS = {
        status: "",
        orderBy: "score",
        sort: true,
        letter: ""
    }
    const [animanga, setAnimanga] = useState([])
    const [active, setActive] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)
    const [filter, setFilter] = useState(INITIAL_FILTERS)
    const BASE_URL = `https://api.jikan.moe/v4/${type}`


    useEffect(() => {
        setPage(INITIAL_PAGE)
        setActive(false)

        const apiCall = setTimeout(() => {
            console.log(filter);
            fetch(`${BASE_URL}?limit=30&page=${INITIAL_PAGE}&letter=${filter.letter}&status=${filter.status}&type=${filter.type}&order_by=${filter.orderBy}&sort=${filter.sort ? "desc" : "asc"}`)
                .then(
                    r => r.json())
                .then(
                    r => {
                        setAnimanga(r.data)
                        setActive(true)
                    }
                )
        }, 500);

        return () => clearTimeout(apiCall)
    }, [filter])

    useEffect(() => {
        if (page === INITIAL_PAGE) return
        fetch(`${BASE_URL}?limit=30&page=${page}&letter=${filter.letter}&status=${filter.status}&order_by=${filter.orderBy}&sort=${filter.sort ? "desc" : "asc"}`)
            .then(
                r => r.json())
            .then(
                r => {
                    setAnimanga(oldAnimangas => [...oldAnimangas, ...r.data])
                })
    }, [page])

    return {
        animanga,
        active,
        setPage,
        setFilter,
        filter
    }
}

export default useAnimanga;