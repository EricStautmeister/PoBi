import React from 'react';
import { useSearchParams } from 'react-router-dom';

import '../css/FullPage.css'; //TODO: Padding on the right

const FullPage = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const passedData = sessionStorage.getItem(`${id}`);
    const data = JSON.parse(passedData);
    //TODO: Some styling pls, this looks uglier than a mf

    const { title, content } = data;
    return (
        <div id="Body">
            <div className="contentWrapper no-deco">
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default FullPage;