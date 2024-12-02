'use client'

import { config } from '$/extra/config'
import { Trains } from '$/types/include'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Page() {
    const [trains, setTrains] = useState<Trains[]>([])

    /* const Press = async () => {

    } */

    const Fetch = async () => {
        await axios.get(config.apis.estacionesTrenes + `${291}`, {
            data: {
                hasta: 229,
            },
        }).then((response) => {
            if (response.status === 200) {
                response.data.forEach((item: Trains) => {
                    setTrains(prevTrains => [...prevTrains, {
                        from: item.from,
                        to: item.to,
                        arrivalTime: item.arrivalTime,
                        departureTime: item.departureTime,
                    }])
                })
            }
        })
    }

    useEffect(() => {
        Fetch()
    }, [])

    return (
        <>
            <div className={'flex justify-center items-center content-center'}>
                <div className={'overflow-x-scroll'}>
                    {trains.map(({ from, to, timeToArrival, departureTime }, index) => (
                        <div key={index}>

                        </div>
                    ))}
                </div>
            </div>
        </> 
    )
}