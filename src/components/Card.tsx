import { Dollars } from '$/types/include'

export default function Card({ buy, sell, name, spread, dateRefresh }: Dollars) {
    return (
        <div className={'flex flex-col'}>
            <p>{name}</p>
            <p>Buy: {buy}</p>
            <p>Sell: {sell}</p>
        </div>
    )
}