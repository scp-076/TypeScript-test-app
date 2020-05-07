import React from 'react';
import {useHistory} from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory();

    return (
        <React.Fragment>
            <h1>Info page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eos error tempore. Autem dolor
                doloremque doloribus molestias qui velit, voluptate.</p>
            <button className="btn" onClick={() => history.push('/')}>Back to todo list</button>
        </React.Fragment>
    )
}