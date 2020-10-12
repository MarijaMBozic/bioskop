import React, { Component } from "react";

import { NavLink } from "react-router-dom"
import list from "./../../data/data.js"
import "./index.scss"

class RepertoarListMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: list
        }
    }

    renderListItem = () => {
        const { itemList } = this.state
        return itemList.map((item) => {
            const { id, title } = item
            return (
                <li key={id}>
                    <NavLink onClick={this.setHiddenTrue} activeClassName="list-item" to={`/repertoar/${id}`}>
                        {title}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="listRepertoar-item">
                <div className="h3-item">
                    <h3>Repertoar filmova</h3>
                </div>
                <div >
                    <ul className="repertoar-itemList">
                        {this.renderListItem()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default RepertoarListMovie