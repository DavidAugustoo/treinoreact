type Props = {
    title: string;
}

export const Header = ({ title }: Props) => {
    return (
        <header>
            <h1>Olá {title}!</h1>
            <hr />
        </header>
    );
}