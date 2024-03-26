import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout(){

    return (
        <div className="layout">
            <header className="layout-header">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    {/* <div className="">{name}</div>
                    <div className="">{login_state} </div> */}
                </div>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
            </footer>
        </div>
    )

}

export default Layout;