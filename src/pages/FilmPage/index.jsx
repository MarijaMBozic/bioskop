import React from "react";
import { withRouter } from "react-router-dom"
import ListMovie from "./../../data/data.js"
//import image from "./../../image/BeforeSunset.jpg"
import "./index.scss"
const list = ListMovie;


function FilmPage(props) {

    const id = props.match.params.movieId;
    const isHidden = props.isHidden;
    const toggleHidden = props.toggleHidden
    const movie = list.find(m => m.id == id)

    console.log(movie.image)

    return (
        <div className="filmpage-item" >
            <div className="details-movie">
                <h1>{movie.title}</h1>
                <h4>Genre:</h4>
                <p>{movie.genre}</p>
                <h4>Description:</h4>
                <p className="description-info">{movie.description}</p>
                <div className="buttonIsHiden">
                    <button onClick={toggleHidden}>
                        PRICE
                    </button>
                    {!isHidden && <p>{movie.price}din.</p>}
                </div>
            </div>
            <div className="image-item">
                <img src={movie.image} alt="slika" />
            </div>
        </div>

    )
}

export default withRouter(FilmPage)