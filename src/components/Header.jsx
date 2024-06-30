import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div><header>
            <h1>Nav example</h1>
        </header>
            <nav>
                <ul>
                    <li>
                        <Link to="./">Home</Link>
                    </li>
                    <li>
                        <Link to="./about">About</Link>
                    </li>
                    <li>
                        <Link to="./contact">Contact</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Header