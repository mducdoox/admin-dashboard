import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const TransactionHistory = () => {
  const transactions = [
    { id: 1, time: '2024-05-26', ownerEmail: 'owner@example.com', bookTitle: 'Book One', exchangerEmail: 'exchanger@example.com', status: 'Completed' },
    // Add more transactions here
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Owner's Email</TableCell>
            <TableCell>Book's Title</TableCell>
            <TableCell>Exchanger's Email</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.id}</TableCell>
              <TableCell>{transaction.time}</TableCell>
              <TableCell>{transaction.ownerEmail}</TableCell>
              <TableCell>{transaction.bookTitle}</TableCell>
              <TableCell>{transaction.exchangerEmail}</TableCell>
              <TableCell>{transaction.status}</TableCell>
              <TableCell>
                <Button>Edit</Button>
                <Button>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionHistory;
