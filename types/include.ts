type CardProps = {
    name: string;
    image: string;
    content: string;
}

type Answer = {
    image: string;
    name: string;
    content: string;
}

type InputType = {
    Press: Function;
    Placeholder: string;
}

type NotesType = {
    image: string;
    link: string;
    id: string;
    content: string;
    title: string;
}

type DolarType = {
    ask: number;
    bid: number;
    name: string;
    timestamp: string;
    variation: number;
}

type DolaresType = {
    compra: number;
    venta: number;
    casa: string;
    nombre: string;
    fechaActualizacion: string;
    spread: number;
}

type DolarListType = [
    key: any,
    value: any,
]

type DollarCompType = {
    name: string;
    compra: number;
    venta: number;
}

type ChartType = {
    compra: number;
    venta: number;
    casa: string;
    fechaActualizacion: string;
}