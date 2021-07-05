import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { createStructuredSelector } from 'reselect';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

// import { StateType } from "./type"
import FruitsType from "../../interfaces/fruits"

import { key } from "./const"
import actions from "./actions"
import selectors from "./selectors"
import { ActionType } from "./type"
import useStyles from "./style"

type PropsType = {
    getFruits: (name: string) => { type: string; payload: { name: string; }; }
    fruits: FruitsType[]
}
const Home: React.FunctionComponent<PropsType> = ({ getFruits, fruits }) => {
    const classes = useStyles();
    React.useEffect(() => {
        getFruits("")
    }, [])

    return <TableContainer
        classes={{
            root: classes.root
        }}
        component={Paper} >
        <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell align="right">name</TableCell>
                    <TableCell align="right">createdAt</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {fruits.map(row => (
                    <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell
                            classes={{
                                root: classes.avartarContent
                            }}
                            align="right"><Avatar alt="Remy Sharp" src={row.avatar} />{row.name}</TableCell>
                        <TableCell align="right">{row.createdAt}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer >
}

const mapStateToProps = createStructuredSelector({
    fruits: selectors.selectFruits(),
    status: selectors.selectStatus(),
});
const mapDispatchToProps = (dispatch: Dispatch<ActionType<{ name: string }>>) => ({
    getFruits: (name: string) => {
        return dispatch(actions.getFruits.trigger({ name }));
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);

