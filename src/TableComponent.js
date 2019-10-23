import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);



const useStyles = makeStyles(theme => ({
    root: {
        width: '80%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
        margin:'8em'
    },
    table: {
        minWidth: 700,
    },
    textField:{
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
}));

const TableComponent = ({rows}) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>FIRSTNAME</StyledTableCell>
                        <StyledTableCell align="right">LASTNAME</StyledTableCell>
                        <StyledTableCell align="right">BIRTHDAY</StyledTableCell>
                        <StyledTableCell align="right">AGE</StyledTableCell>
                        <StyledTableCell align="right">HOBBY</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <StyledTableRow key={row.firstname}>
                            <StyledTableCell component="th" scope="row" key={row.firstname}>
                                {row.firstname}
                            </StyledTableCell>
                            <StyledTableCell align="right" key={row.lastname}>{row.lastname}</StyledTableCell>
                            <StyledTableCell align="right" key={row.birthday}>{row.birthday}</StyledTableCell>
                            <StyledTableCell align="right" key={row.age}>{row.age}</StyledTableCell>
                            <StyledTableCell align="right" key={row.hobby}>{row.hobby}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default TableComponent;