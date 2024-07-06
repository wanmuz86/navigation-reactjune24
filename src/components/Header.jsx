import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div><header>
            <h1>Nav example</h1>
        </header>
            <nav>
                <ul>
                    {/* Link is a simpler version of NavLink */}
                    {/* <li>
                        <Link to="./">Home</Link>
                    </li>
                    <li>
                        <Link to="./about">About</Link>
                    </li>
                    <li>
                        <Link to="./contact">Contact</Link>
                    </li> */}

                    <li>
                        <NavLink to="./" className={({ isActive, isPending }) =>
                            isActive ? "active"
                                : isPending
                                    ? "pending"
                                    : ""
                        } >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="./about" className={({ isActive, isPending }) =>
                            isActive ? "active"
                                : isPending
                                    ? "pending"
                                    : ""
                        } >About</NavLink>
                    </li>
                    <li>
                        <NavLink to="./products" className={({ isActive, isPending }) =>
                            isActive ? "active"
                                : isPending
                                    ? "pending"
                                    : ""
                        } >Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="./contact" className={({ isActive, isPending }) =>
                            isActive ? "active"
                                : isPending
                                    ? "pending"
                                    : ""
                        } >Contact</NavLink>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Header