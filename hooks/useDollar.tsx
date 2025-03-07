import { config } from '@/extra/config'
import axios from 'axios'
import { useEffect, useState } from 'react'

export function useDollar() {
    const [results, setResults] = useState<DolarType[]>([])

    useEffect(() => {
        axios.get(config.apis.dolarPrices).then((response) => {
            if (response.status === 200) {
                response.data.forEach((item: DolarType) => {
                    console.log(item)

                    setResults(prevResults => [...prevResults, {
                        compra: item.ask,
                        venta: item.bid,
                        fechaActualizacion: item.timestamp,
                        spread: item.variation,
                        casa: item,
                    }])
                })
            }
        })
    }, [axios])

    return results
}