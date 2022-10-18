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
                    <h1>Downloads</h1>
                    <h2>Mobile</h2>
                    <div>
                        <MobileStoreButton
                            class="googlebtn"
                            store="android"
                            url="/"
                            linkProps={{ title: 'iOS Store Button' }}
                        />
                    </div>
                    <a class="convert" href={process.env.REACT_APP_GHREPO_REDIRECT}>Direct Download (not available)</a>

                    <br />
                    <Link to="/">
                        <button class="back">Back</button>
                    </Link>
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