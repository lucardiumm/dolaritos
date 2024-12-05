import { Dollars } from '$/types/include'
import { useRouter } from 'next/navigation'

export default function Card({ buy, sell, name, spread, casa, dateRefresh }: Dollars) {
    const router = useRouter()

    const Press = async () => {
        router.push('/' + casa)
    }

    return (
        <div onClick={Press} className={'cursor-pointer flex flex-col'}>
            <p>{name}</p>
            <p>{buy === 0 ? '' : `Buy: ${buy}`}</p>
            <p>Sell: {sell}</p>
            <p>Hace {(new Date().getSeconds() - new Date(dateRefresh).getSeconds())} segundos</p>
        </div>
    )
}