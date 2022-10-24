import React from 'react'
import { Link } from "react-router-dom"
import './Home.css'
import MobileStoreButton from 'react-mobile-store-button';

const Home = () => {
    /* Google Store Button
         <div>
            <MobileStoreButton
                class="googlebtn"
                store="android"
                url="/"
                linkProps={{ title: 'iOS Store Button' }}
            />
        </div>   
    */
    return (
        <section class="container">
            <div class="left-half">
            <article>
                <h1>Blazap</h1>
                <h2>Find the app you need!</h2>
                <button class="formbtn" onClick={() => window.location.href = process.env.REACT_APP_WEBAPP_REDIRECT}>Launch on the web</button>
                <Link to={process.env.REACT_APP_DOWNLOADS_REDIRECT}>
                <button class="formbtn">Downloads</button>
                </Link><br />
                <a class="convert" href={process.env.REACT_APP_GHREPO_REDIRECT}>view on GitHub</a>
                </article>            
                </div>
            <div class="right-half">
                <article>
                    <img src="https://raw.githubusercontent.com/blazap/blazap-db/main/nocolor.png" />
                </article>
            </div>
        </section>



    )
}

export default Home;