type Props = {
    key: number;
    data: {
        name: string;
        age: number;
    }
}

export const Person = ({ data, key }: Props) => {
    return (
        <li key={key}>
            {data.name} - {data.age}
        </li>
    );
}