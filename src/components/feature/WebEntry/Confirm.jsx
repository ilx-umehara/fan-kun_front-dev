import Grid from '@mui/material/Grid'
import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { UserInputData } from "../../pages/WebEntryContentPage";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

var item = {
    'checkBox': 'チェックボックス',
    'textBox': 'テキストボックス',
    'pullDown': 'プルダウン',
    'multilineText': 'マルチラインテキスト'
}

function Confirm(props) {
    const { currentState } = useContext(UserInputData);
    const onSubmit = () => {
        alert(JSON.stringify(currentState));
    };
    const inputDataLists = [];
    let id = 0;
    for ( let k in currentState) {
        for ( let v in currentState[k]) {
            let value = ''
            if (currentState[k][v] === true) {
                value = 'チェックしました';
            } else if (currentState[k][v] === false) {
                value = 'チェックしていません';
            } else if (currentState[k][v] === '') {
                value = '未入力';
            } else {
                value = currentState[k][v];
            }
            inputDataLists.push(
                {
                    "id": id,
                    "name": item[v],
                    "value": value
                }
            );
            id++;
        }
    }
    return (
        <Grid container>
            <TableContainer component={Paper}>
                <Table aria-label="Customer Input Data">
                    <TableHead>
                        <TableRow>
                            <TableCell>項目</TableCell>
                            <TableCell>入力内容</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            inputDataLists.map(function(elem) {
                                return (
                                    <TableRow key={elem.id}>
                                    <TableCell>{elem.name}</TableCell>
                                    { elem.value ? <TableCell>{elem.value}</TableCell> : <TableCell>None</TableCell> }
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="primary" onClick={props.handleBack}>
                戻る
            </Button>
            <Button variant="contained" color="primary" onClick={onSubmit}>
                送信
            </Button>
        </Grid>
    )
}

export default Confirm