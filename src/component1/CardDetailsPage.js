import React from "react";
import {useParams} from 'react-router-dom';

function CardDetailsPage() {
    const {title} = useParams();
    return (
        <div>
            <h1>card details</h1>
            <p>Card title:{title}</p>
        </div>
    );
}

export default CardDetailsPage;