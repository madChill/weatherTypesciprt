import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { key } from "./const"
import actions from "./actions"
import { FruitActionType } from "./type"

type PropsType = {
    onSearch(name: string): void;
}
const Home: React.FunctionComponent<PropsType> = ({ onSearch }) => {
    React.useEffect(() => {
        onSearch("test")
    }, [])
    return <div>hello world</div>
}

const mapDispatchToProps = (dispatch: Dispatch<FruitActionType>) => ({
    onSearch: (name: string) => dispatch(actions.getFruits.trigger({ name })),
});
export default connect(null, mapDispatchToProps)(Home);

