const Item = ({ text, children }) => {
    return (
        <a 
            href="/" 
            className="list-group-item list-group-item-action list-group-item-success"
        >
            { text } { children }
        </a>
    )
};

export default Item;