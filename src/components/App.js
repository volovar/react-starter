import React, { Component } from "react";
import { css } from "@emotion/core";

const appStyles = css`
    background: lightblue;
    box-sizing: border-box;
    height: 100%;
    padding: 2em;
`;

class App extends Component {
    render() {
        return <div css={appStyles}>Hello React Starter</div>;
    }
}

export default App;
