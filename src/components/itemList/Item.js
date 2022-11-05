import "./Item.css"
import Button from "../button/Button";
import {Link} from "react-router-dom"

function Item(props) {
    let {title, detail, price, img, id} = props;

    const urlDetalle = `/calzado/${id}`;

    return(
        <div className="Item">
            <div className="Item-img">
                <img src={img} alt="Item img"></img>
            </div>
            <div className="Item-detail">
                <h3> {title}</h3>
                <p> {detail}</p>
                <h4> $ {price} </h4>
            </div>
            <Link to={urlDetalle}> 
                <Button text=" Ver Mas" />
            </Link>
        </div>
    )
}

export default Item; 