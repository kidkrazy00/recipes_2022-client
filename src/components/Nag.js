import React from "react";
import { Link } from 'react-router-dom'

const Nag = () => {
    return (
        <article className="nag">
            <div>
                <h1> Oh No!</h1>
                <p>You're not logged in. There's a lot being cooked up be sure check back soon.</p>
                <Link className="btn__basic" to="/">Log In</Link>
            </div>
        </article>
    )
}

export default Nag