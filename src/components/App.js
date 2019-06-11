import React, { Component } from "react";
import { css } from "emotion";

const appStyles = css`
    background: lightblue;
    height: 100%;
    padding: 2em;
`;

class App extends Component {
    render() {
        return <div className={appStyles}>Hello React Starter</div>;
    }
}

export default App;
