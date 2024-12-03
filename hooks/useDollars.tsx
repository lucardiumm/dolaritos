'use client'

import { useEffect, useState } from 'react'
import { Dollars } from '$/types/include'
import axios from 'axios'

export default function useDollars() {
    const [data, setData] = useState<Dollars[]>([])

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_DOLLARAPI as string, {}).then((response) => {
            if (response.status === 200) {
                console.log(response.data)

                response.data.forEach((item: any) => {
                    setData(prevData => [...prevData, {
                        name: item.nombre,
                        sell: item.venta,
                        buy: item.compra,
                        spread: 0,
                        dateRefresh: item.fechaActualizacion,
                    }])
                })
            }
        })
    }, [])

    return data
}