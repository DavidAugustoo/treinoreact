type Props = {
    text: string;
    clickFn: (frase: string) => void;
}

export const Button = ({ text, clickFn }: Props) => {

    let handleClick = () => {
        clickFn("Você é top!");
    }
        
    return (
        <>
            <button onClick={handleClick}>{text}</button>
        </>
    );
}