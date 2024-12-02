import { useEffect, useState } from 'react'
import { Trains } from '$/types/include'
import axios from 'axios'
import { config } from '$/extra/config'

export default function useTrains(
    from: number, 
    to: number,
) {
    const [data, setData] = useState<Trains[]>([])

    useEffect(() => {
        axios.get(`${config.apis.estacionesTrenes}/291`, {
            data: {
                hasta: '229',
            },
            headers: {

            },
        }).then((response) => {
            if (response.status === 200) {
                console.log(response.data)

                response.data.forEach((item: Trains) => {
                    setData(prevData => [...prevData, {
                        from: item.from,
                        to: item.to,
                    }])
                })
            }
        })
    }, [])

    return data
}