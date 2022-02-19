import React, { Component } from 'react'; //useEffect, useState
import { Card } from './';

import './css/Projects.css';

export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          postList: null,
        };
    }

    componentDidMount() {
        this.fetchPosts();
    }
    //TODO: When you change to Blog or back, the component unmounts and resets state, project list is null then


    //TODO: Instead of localstorage, use session storage

    //TODO: Do not fetch if there is data in localstorage, only if data has been updated

    //TODO: Also, perhaps localstorage should be cleaned every now and then storage.clear(str) or .removeItem(str)

    fetchPosts = async () => {
        const res = await fetch('http://localhost:5000/getPosts');
        const data = await res.json();
        this.setState({
            postList: data.response,
        });
    };

    storeDataToLocalStorage = (postList) => {
        console.log('storeDataToLocalStorage:', postList)
        if (postList !== null && postList.length) {
            const { postList } = this.state;
            let index = 0;
            for (const post of postList) {
                const data = JSON.stringify(post);
                localStorage.setItem(`${index}`, data);
                index++;
            }
        }
    };

    render() {
        const { postList } = this.state;
        this.storeDataToLocalStorage(postList);
        // console.dir(postList); //FIXME: This runs twice per render, find out why and potentially fix it
        return (
            <div className="container">
                {postList !== null && postList.length ? (
                    <div className="wrapper">
                        {postList.map((item, index) => (
                            <Card
                                key={index}
                                anchor={'posts'}
                                to={index}
                                data={JSON.stringify(item)}
                                title={item.title}
                                content={item.content}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="wrapper">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                )}
            </div>
        );
    }
}
