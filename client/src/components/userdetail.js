import React from "react";

function UserDetails(props) {
    let user = {
        name: props.user.name,

        email: props.user.email,
        cell: props.user.cell,
        city: props.user.city,
        state: props.user.state,
        country: props.user.country,
        postcode: props.user.postcode,
        img: props.user.img
    }
    console.log(user)
    return (<div className="bg-white text-black card border ">
        <div className="card-body">
            <img src={props.user.img} alt="bio pic"></img>
            <h5 className="card-title text-black">{props.user.name}</h5>
            <h6 className="card-title test-black">Nationality: {props.user.nat}</h6>
            <p>Email: {props.user.email}</p>
            <p >Cell: {props.user.cell}</p>
            <p >City: {props.user.city}</p>
            <p >State: {props.user.state}</p>
            <p >Country: {props.user.country}</p>
            <p >Zipcode: {props.user.postcode}</p>
            

            <button onClick={() => props.saveusers(user)} className="btn btn-primary">Save </button>

        </div>

    </div>)
}


export default UserDetails;