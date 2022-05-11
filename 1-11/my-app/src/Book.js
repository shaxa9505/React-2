import React from 'react';

function Book(props) {
    return (
        <div>
            <h1>{props.name ? props.name : "DEFAULT BOOK"}</h1>
            <p>{props.year}</p>
            <span>{props.price}</span> <br/>
            <span>{props.children}</span>
        </div>
    );
}

export default Book;