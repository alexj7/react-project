import { useEffect, useState } from "react";

import { useGifs } from "./useGifs";
import getSingleGifs from "services/getSingleGif";

export default function useSingleGif({ id }) {
    const { gifs } = useGifs()
    const localGif = gifs.find(singleGif => singleGif.id == id)

    const [selectedGif, setSelectedGif] = useState(localGif)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        if (!selectedGif) {
            setIsLoading(true)
            getSingleGifs({ id })
                .then(gif => {
                    setSelectedGif(gif)
                    setIsLoading(false)
                    setIsError(false)
                }).catch(err => {
                    setIsLoading(false)
                    setIsError(true)
                })
        }

    }, [selectedGif, id])

    return { selectedGif, isLoading, isError }
}