import React from "react";
import Axios from "axios";

class Connections extends React.Component {
    state = {
        savebooks: []
    }

    componentDidMount = () => {
        Axios.get("/api/books")
            .then(records => {
                console.log("Records", records)
                let savebooks = records.data
                this.setState({
                    savebooks: savebooks
                })
            })
    }

    render() {
        return (<main>

            
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">My Connections</h1>
                        <p className="lead text-muted">Review all your plugs and connections.</p>
                        <p>
                            <button onClick={this.sortLastName} className="btn btn-primary my-2">Sort By Last Name </button>
                            <button onClick={this.sortLastName} className="btn btn-secondary my-2">Sort By Location</button>

                        </p>
                    </div>
                </div>
            </section>
            <div className="album py-10 bg-light">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Artist Image</text></svg>

                                <div className="card-body">
                                    <p className="card-text">Artist Info Populated Here.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Connect</button>
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Artist Image</text></svg>

                                <div class="card-body">
                                    <p className="card-text">Artist Info Populated Here.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Connect</button>
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Artist Image</text></svg>

                                <div className="card-body">
                                    <p className="card-text">Artist Info Populated Here.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Connect</button>
                                        </div>
                                        <small className="text-muted">9 mins</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            


            {
            this.state.savebooks.map((ele, key) => {
                return (
                    <div className="card-body">
                        <h5 className="card-title">{ele.title}</h5>
                        <p className="card-text">{ele.description}</p>
                        {/* <p className="btn btn-primary">{book.authors}</p> */}


                    </div>
                )
            })
        }
        </main >)
    }
}

export default Connections;
