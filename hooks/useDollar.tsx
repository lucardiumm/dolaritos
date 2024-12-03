'use client'

import { useEffect, useState } from 'react'
import { Dollar } from '$/types/include'
import axios from 'axios'

export default function useDollar(name: string) {
    const [data, setData] = useState<Dollar[]>([])

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_DOLLARAPI as string, {}).then((response) => {
            if (response.status === 200) {
                console.log(response.data)

                response.data.forEach((item: any) => {
                    if (item.name === name) {
                        setData(prevData => [...prevData, {
                            name: item.nombre,
                            sell: item.vender,
                            buy: item.comprar,
                            spread: 0,
                            dateRefresh: item.fechaActualizacion,
                        }])
                    }
                })
            }
        })
    }, [])

    return data
}