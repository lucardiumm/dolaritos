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

type DolaresType = {
    buy: number;
    casa: string;
    sell: number;
    name: string;
    timestamp: string;
}

type DolarType = {
    compra: number;
    venta: number;
    casa: string;
    nombre: string;
    fechaActualizacion: string;
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