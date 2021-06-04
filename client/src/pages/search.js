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

        return (<body>
            <div class="s01">
                <form>
                    <fieldset>
                        <legend>Search for Your Next Connection</legend>
                    </fieldset>
                    <div className="inner-form">

                        <div class="input-field second-wrap">
                        <input type="text" value={this.state.searchString} onChange={this.getString} className="form-control" placeholder="Enter Your Location" />
                       </div>
                        <div class="input-field third-wrap">
                            <select className="form-control search-slt" id="exampleFormControlSelect1">
                                <option>Need Mastering?</option>
                                <option>Yes, I need Mastering help.</option>
                                <option>No, I do not need Mastering help.</option>
                            </select>
                        </div>
                        <div class="input-field third-wrap">
                            <select className="form-control search-slt" id="exampleFormControlSelect1">
                                <option>Need Mixing?</option>
                                <option>Yes, I need help with Mixing.</option>
                                <option>No, I do not need help with Mixing.</option>
                            </select>
                        </div>
                        <div class="input-field third-wrap">
                            <select className="form-control search-slt" id="exampleFormControlSelect1">
                                <option>Need Production?</option>
                                <option>Yes, I need Production Help.</option>
                                <option>No, I do not need Production help.</option>
                            </select>
                        </div>
                     

                       
                        <div class="input-field third-wrap">
                            <button onClick={this.getBooks} class="btn-search" type="button">Search</button>
                        </div>
                    </div>
                </form>

            </div>
            <section>
                <br />
                {this.state.booksDetails.map((book, key) => {
                    return (
                        <Bookdetail book={book} key={key}
                            savebook={this.savebook}
                        />

                    )
                })}
            </section>


        </body>)
    }
}

export default Search;
