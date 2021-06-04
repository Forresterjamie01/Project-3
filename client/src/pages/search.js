import React from "react";
import Axios from "axios";
import Bookdetail from "../components/Bookdetai";

class Search extends React.Component {
    state = {
        booksDetails: [],
        booksDatabase: [],
        searchString: ""
    }

    getBooks = (event) => {
        event.preventDefault()
        let searchStr = this.state.searchString
        Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchStr}`)
            .then(records => {
                console.log("Records", records)
                let booksData = []
                let apiData = records.data.items
                for (let i = 0; i < apiData.length; i++) {
                    booksData.push({
                        title: apiData[i].volumeInfo.title,
                        // authors: apiData[i].volumeInfo.authors[0] || "n/a",
                        description: apiData[i].volumeInfo.description,
                        subtitle: apiData[i].volumeInfo.subtitle

                    })
                }
                this.setState({
                    booksDetails: booksData,
                    booksDatabase: booksData
                })
                console.log("state", this.state.booksDetails)
            })

    }

    getString = (event) => {
        let ele = event.target.value;
        this.setState({ searchString: ele }, () =>
            console.log(ele))
    }

    savebook = (booksDetails) => {
        console.log(booksDetails)
        Axios.post("/api/books", booksDetails).then(savebook => {
            console.log(savebook)
        })

    }
    render() {
        return (<main>
            <h1>Search for Your Next Connection</h1>
            <section>
                <form>
                    <div className="col-12">
                        <label className="form-label">Google Books:</label>
                        <input type="text" value={this.state.searchString} onChange={this.getString} className="form-control" />
                    </div>
                    <div className="col-12">
                        <button type="submit" onClick={this.getBooks} className="btn btn-primary">Search Books</button>
                    </div>


                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                    <input type="text" class="form-control search-slt" placeholder="Enter Pickup City"></input>
                        </div>
                                    <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                        <input type="text" class="form-control search-slt" placeholder="Enter Drop City"></input>
                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                            <select class="form-control search-slt" id="exampleFormControlSelect1">
                                                <option>Select Vehicle</option>
                                                <option>Example one</option>
                                                <option>Example one</option>
                                                <option>Example one</option>
                                                <option>Example one</option>
                                                <option>Example one</option>
                                                <option>Example one</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                            <button type="button" class="btn btn-danger wrn-btn">Search</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <br />
                        {this.state.booksDetails.map((book, key) => {
                            return (
                                <Bookdetail book={book} key={key}
                                    savebook={this.savebook}
                                />

                            )
                        })}
           
            </section>

                        
        </main>)
    }
}

export default Search;
