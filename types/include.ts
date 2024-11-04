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
    timestamp: number;
    variation: number;
    spread: number;
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