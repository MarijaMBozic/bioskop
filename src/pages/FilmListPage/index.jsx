import React, { Component } from "react";
import ListMovie from "./../../data/data.js"
import "./index.scss"
const list = ListMovie;

class FilmListPage extends Component {

    componentDidMount() {
        this.props.populateListMovie(list)
    }
    render() {
        return (
            <div>
                <h3>
                    Movie list
                </h3>
                <div className="renderlist-item">
                    <ul>
                        {this.props.renderListItem()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default FilmListPage