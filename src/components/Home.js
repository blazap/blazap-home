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
                <h1>Blazap - Store of webapps</h1>
                <h2>And you can convert a webapp to a normal app!</h2>
                <button class="formbtn" onClick={() => window.location.href = process.env.REACT_APP_WEBAPP_REDIRECT}>Launch on the web</button>
                <button class="formbtn" onClick={() => window.location.href = process.env.REACT_APP_DOWNLOADS_REDIRECT}>Downloads (not available)</button><br />
                <a class="convert" href={process.env.REACT_APP_GHREPO_REDIRECT}>view on GitHub</a>
                </article>            
                </div>
            <div class="right-half">
                <article>
                    <img src="https://cdn.discordapp.com/attachments/1017260992650027058/1031664889468555324/sincolor.png" />
                </article>
            </div>
        </section>



    )
}

export default Home;