import { Post } from '../types/Movie';

type Props = {
    data: Post;
}

export const PostItem = ({data}: Props) => {
    return (
        <div>
            <h1 className="font-bold">{data.title}</h1>
            <p>{data.body}</p>
        </div>
    );
}