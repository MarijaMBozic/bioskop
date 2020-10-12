import React, { Component } from "react";
import FilmListPage from "./../FilmListPage"
import FilmPage from "./../FilmPage"
import { Route, NavLink } from "react-router-dom"
import "./index.scss"

class RepertoarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            isHidden: true
        }
    }

    setHiddenTrue = () => {
        this.setState({ isHidden: true })
    }


    toggleHidden = () => {
        this.setState({ isHidden: false })
        console.log(this.state.isHidden)
    }
    populateListMovie = (list) => {
        this.setState({
            itemList: list
        })
    }

    renderListItem = () => {
        const { itemList } = this.state
        return itemList.map((item) => {
            const { id, title } = item
            return (
                <li key={id}>
                    <NavLink onClick={this.setHiddenTrue} activeClassName="movielist-item" to={`/repertoar/${id}`}>
                        {title}
                    </NavLink>
                </li>
            )
        })
    }
    render() {
        const { isHidden } = this.state
        return (
            <>
                <div className="repertoar-item">
                    <div className="repertoarlist-item">
                        <FilmListPage
                            populateListMovie={this.populateListMovie}
                            renderListItem={this.renderListItem}
                        />
                    </div>
                    <div className="repertoardetails-item">
                        <Route exact path="/repertoar/:movieId">
                            <FilmPage
                                toggleHidden={this.toggleHidden}
                                isHidden={isHidden} />
                        </Route>
                    </div>
                </div>
            </>
        )

    }
}

export default RepertoarPage