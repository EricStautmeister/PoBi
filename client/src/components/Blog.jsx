import React, { Component } from 'react'; //useEffect, useState
import { Outlet, NavLink } from 'react-router-dom';

import './css/Blog.css';

export default class Blog extends Component {
    render() {
        return (
            <div id="Body">
                <div className="btnContainer">
                    <NavLink className="no-deco" to={`/posts/add`}>
                        <button className="btn right-align">
                            Create new Post
                        </button>
                    </NavLink>
                </div>
                <Outlet />
            </div>
        );
    }
}
