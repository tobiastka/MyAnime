import { useEffect, useRef, useState } from 'react';

const useScroll = ({ distance = "100px" }) => {
    const elementRef = useRef()
    const [onView, onViewSetter] = useState(false)
    useEffect(() => {

        const onIntersection = (entries, observer) => {
            const e = entries[0]
            if (e.isIntersecting) {
                onViewSetter(true)
            } else {
                onViewSetter(false)
            }
        }
        const observer = new IntersectionObserver(onIntersection, {
            rootMargin: distance
        })
        observer.observe(elementRef.current)

        return () => observer.disconnect()
    })

    return {
        elementRef,
        onView
    }


}

export default useScroll
