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
    bid: number;
    ask: number;
    name: string;
    time: string;
}

type DolarValueType = {
    bid: number;
    ask: number;
    time: number;
}