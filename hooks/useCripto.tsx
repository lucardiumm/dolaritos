import { config } from '@/extra/config'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useCripto() {
    const [refresh, setRefresh] = useState(true)
    const [data, setData] = useState<DolarType[]>([])

    const refreshHook = () => {
        setRefresh((prev) => !prev)
    }
    
    useEffect(() => {
        if (refresh === true) {
            axios.get(config.apis.priceListAPI, {}).then((response) => {
                if (response.status === 200) {
                    Object.entries(response.data).forEach(([key, value]: [string, any]) => {
                        if (['ripio', 'belo', 'lemoncash', 'dolarapp'].includes(key)) {
                            setData(prevData => [...prevData, {
                                name: key,
                                ask: value.ask,
                                bid: value.bid,
                                time: value.time,
                            }])
                        }
                    })
                }
            })
            
            setRefresh(false)
        }
    }, [axios, config, refresh])

    return {
        data, 
        refreshHook,
    }
}