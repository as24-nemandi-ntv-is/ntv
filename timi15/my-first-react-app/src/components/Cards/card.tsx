
export function Card ( {title, text, image , authorName}: {
    title: string;
    text: string;
    image: string;
    authorName: string;
}) {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{text}</p>
            <img src={image} height={300} />
            <p>{authorName}</p>
        </div>
    );
}
