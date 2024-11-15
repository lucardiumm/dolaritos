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
    sell: number;
    name: string;
    timestamp: string;
}

type DolarType = {
    compra: number;
    venta: number;
    nombre: string;
    fechaActualizacion: string;
}

type DolarListType = [
    key: any,
    value: any,
]

type DollarCompType = {
    name: string;
}

type ChartType = {
    value: number;
    date: string;
}