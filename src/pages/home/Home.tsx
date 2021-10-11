import React from 'react';
import './Home.css';
import {Button} from "semantic-ui-react";

const Home = () => (
    <div>
        <Button primary>Primary</Button>
        <Button secondary={true}>Secondary</Button>
    </div>
);

export default Home;
