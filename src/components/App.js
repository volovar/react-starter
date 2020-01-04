import React from "react";
import { Global } from "@emotion/core";
import { globalCss } from "./global.styles";
import { appCss } from "./app.styles";

const App = () => {
    return (
        <>
            <Global styles={globalCss} />
            <div css={appCss}>Hello React Starter</div>
        </>
    );
};

export default App;
