import {Item} from "../Models/ListingModels"

export default function Listing(props: {items: Item[]}) {
    const {items} = props;

    return (
        <div className="item-list">
            {items.map((item) => (
                <div className="item">
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item.MainImage.url_570xN}></img>
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{item.title}</p>
                        <p className="item-price">{(item.currency_code === "USD") ? "$" : (item.currency_code === "EUR") ? "€" : ""}{item.price}{(item.currency_code !== "USD" && item.currency_code !== "EUR" ? item.currency_code : "")}</p>
                        <p className={"item-quantity " + (item.quantity <= 10) ? "level-low" : (item.quantity > 10 && item.quantity <= 20) ? "level-medium" : "level-high"}>{item.quantity} left</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
