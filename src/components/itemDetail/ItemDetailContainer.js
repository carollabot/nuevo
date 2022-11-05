import React, {useState, useEffect} from 'react'
import { getSingleItem } from '../../services/firestore';
import { useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail'
// import { DotSpinner } from '@uiball/loaders'

function ItemDetailContainer() {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const {id} = useParams();

    useEffect (() => {
        getSingleItem(id)
        .then((respuestaDatos) => setData (respuestaDatos))
        .catch((errormsg) => {
            setError (errormsg.message);
        })
        .finally( () => setIsLoading (false))
    }, [id]);

    if (isLoading) {
        return (
            <>
                {error 
                ? 
                (
                    <div>
                        <h2 className='error'>ERROR</h2>
                        <p className='error'>{error}</p>
                    </div>
                ) 
                : 
                (
                    <h3 className='error'> 
                        ERROR
                        {/* <DotSpinner size={70} speed={0.8} color="black" /> */}
                    </h3>
                )}         
            </>
        )
    }

    return (
        <div>
            <div className="main container">
                <ItemDetail data={data}/>
            </div>
        </div>
    );
}

export default ItemDetailContainer