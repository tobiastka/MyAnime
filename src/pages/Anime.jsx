import Card from "../components/Card";
import Filter from "../components/Filter";
import useAnimanga from "../hooks/useAnimanga";
import Spinner from "../components/Spinner";
import { useEffect } from "react";
import useScroll from "../hooks/useScroll";

const Anime = () => {
    const { animanga, active, setPage, setFilter, filter } = useAnimanga({ type: "anime" });
    const { elementRef, onView } = useScroll({ distance: "100px" })

    useEffect(() => {
        if (!onView) return
        setPage(p => p + 1)

    }, [onView])

    return (
        <div className="h-full flex flex-row">
            <div className="w-1/10 flex flex-col m-2">
                <Filter filter={filter} setFilter={setFilter} />
            </div>
            <div className="flex flex-col flex-1 p-2">
                <div className="grid animanga-cols mb-16 gap-5">
                    {
                        active ?
                            animanga.map(({ mal_id, images, synopsis, score, title_english, title, status, year, episodes }, index) => <Card
                                key={mal_id}
                                images={images}
                                synopsis={synopsis}
                                score={score}
                                title_english={title_english}
                                title={title}
                                status={status}
                                year={year}
                                episodes={episodes} />)
                            :
                            <Spinner />
                    }
                </div>
                <div className="" ref={elementRef}></div></div>
        </div>
    )
}

export default Anime;