import React from "react";

import { useInjectReducer, useInjectSaga } from "redux-injectors";

import { key } from "./const"
import reducer from "./reducers";
import saga from "./saga"

type PropsType = {}
const Home: React.FunctionComponent<PropsType> = () => {
    useInjectReducer({ key, reducer });
    useInjectSaga({ key, saga });

    return <div>hello world</div>
}

export default Home;