import React from "react";
import Axios from "axios";

class Connections extends React.Component{
    state={
savebooks:[]
    }

    componentDidMount=()=>{
        Axios.get("/api/books")
            .then(records => {
                console.log("Records", records)
                let savebooks = records.data
                this.setState({
                    savebooks: savebooks
                })
            })
    }

    render(){
        return(<main>
            <h1>Saved</h1>
            {this.state.savebooks.map((ele,key) =>{
                return(
                    <div className="card-body">
                    <h5 className="card-title">{ele.title}</h5>
                    <p className="card-text">{ele.description}</p>
                    {/* <p className="btn btn-primary">{book.authors}</p> */}
        
        
                </div>
                )
            })}
        </main>)
    }
}

export default Connections;
