import { useEffect } from "react";
import Card from "../components/Card";
import Filter from "../components/Filter";
import Spinner from "../components/Spinner";
import useAnimanga from "../hooks/useAnimanga";
import useScroll from "../hooks/useScroll";

const Manga = () => {
    const { animanga, active, filter, setFilter, setPage } = useAnimanga({ type: "manga" })
    const { elementRef, onView } = useScroll({})
    useEffect(
        () => {
            if (!onView) return
            setPage(p => p + 1)
        },
        [onView]
    )

    return (
        <div className="h-full flex">

            <div className="w-1/10 flex flex-col m-2">
                <Filter isManga={true} filter={filter} setFilter={setFilter} />
            </div>
            <div className="flex flex-col flex-1 p-2">
                <div className="grid animanga-cols mb-16 gap-5">
                    {
                        active ?

                            animanga.map(({ type, mal_id, images, score, title_english, title, volumes, status }) => <Card
                                key={mal_id}
                                cardIsManga={true}
                                images={images}
                                score={score}
                                title={title}
                                title_english={title_english}
                                volumes={volumes}
                                status={status}
                                type={type}
                            />)

                            :
                            <Spinner />
                    }
                </div>
                <div ref={elementRef}></div>
            </div>

        </div>
    )
}

export default Manga;