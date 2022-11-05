import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
// import { DotSpinner } from '@uiball/loaders'

import {getItems, getItemByCategory} from "../../services/firestore"


function ItemListContainer(props) {
    let {greeting} = props;
    let [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const {cat} = useParams();

    useEffect(() => {
        if (cat === undefined){
            getItems().then((respuestaDatos) => setData(respuestaDatos))
            .finally(() =>  setIsLoading(false))
        } else {
            getItemByCategory(cat)
            .then((respuestaDatosFiltrados) => setData(respuestaDatosFiltrados))
            .finally(() =>  setIsLoading(false))
        }} ,[cat])

        useEffect(() => {
            setIsLoading(true)
        }, [cat])

    return (
        <div>  
            <h1>{greeting}</h1>
            <div>
            {
               isLoading ? <h3 className='error'> {/*<DotSpinner size={75} speed={0.7} color="black" />*/} ERROR </h3> : <div className="main container"><ItemList data={data}/></div>
            }
            </div>
        </div>
    );
}

export default ItemListContainer;