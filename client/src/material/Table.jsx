import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function filterReport(report) {
    return {
        name: report.name,
        category: report.category || 'quick',
        date: `${new Date(report.date).toLocaleDateString()}`,
        description: report.description,
        status: report.status || 'pending',
    }
};

export default function BasicTable({data}) {
    data?.data?.map(el => console.log(el));
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Name </TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Status</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {data?.data?.map((el) => {
                const row = filterReport(el);
                return (
                <TableRow
                key={row.name || 'fetching'}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.name || 'fetching'}
                </TableCell>
                <TableCell align="right">{row.category || 'fetching'}</TableCell>
                <TableCell align="right">{row.date || 'fetching'}</TableCell>
                <TableCell align="right">{row.description || 'fetching'}</TableCell>
                <TableCell align="right">{row.status || 'fetching'}</TableCell>
                </TableRow>
            )})}
            </TableBody>
        </Table>
        </TableContainer>
    );
}