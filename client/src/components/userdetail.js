import React from "react";

function Userdetail  (props)  {
    return (<div>
        <div className="card-body">
            <h5 className="card-title">{props.book.title}</h5>
            <p className="card-text">{props.book.description}</p>
            {/* <p className="btn btn-primary">{book.authors}</p> */}

            <button onClick={() => props.saveuser({title:props.book.title,description:props.book.description})} className="btn btn-primary">Save Book</button>

        </div>

    </div>)
}


export default Userdetail