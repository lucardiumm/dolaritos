'use client'

import { useEffect, useState } from 'react'
import { Dollars } from '$/types/include'
import axios from 'axios'

export default function useDollars() {
    const [data, setData] = useState<Dollars[]>([])

    useEffect(() => {
        axios.get(process.env.NEXT_PUBLIC_DOLLARAPI as string, {}).then((response) => {
            if (response.status === 200) {
                response.data.forEach((item: any) => {
                    const spread = item.venta - item.compra

                    setData(prevData => [...prevData, {
                        name: item.nombre,
                        sell: item.venta,
                        buy: item.nombre === 'Tarjeta' ? 0 : item.compra,
                        spread: spread,
                        dateRefresh: item.fechaActualizacion,
                        casa: item.casa,
                    }])
                })
            }
        })
    }, [])

    return data
}