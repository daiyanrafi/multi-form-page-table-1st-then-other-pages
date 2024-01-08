// UserDataTable.tsx
// import React from 'react';
// import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
// import { FormData } from './types';

// type UserDataTableProps = {
//   userDataList: FormData[];
// };

// const UserDataTable: React.FC<UserDataTableProps> = ({ userDataList }) => (
//   <Table>
//     <TableHead>
//       <TableRow>
//         <TableCell>User Title</TableCell>
//         <TableCell>User First Name</TableCell>
//         <TableCell>User Last Name</TableCell>
//       </TableRow>
//     </TableHead>
//     <TableBody>
//       {userDataList.map((userData, index) => (
//         <TableRow key={index}>
//           <TableCell>{userData.user_title}</TableCell>
//           <TableCell>{userData.user_firstName}</TableCell>
//           <TableCell>{userData.user_lastName}</TableCell>
//         </TableRow>
//       ))}
//     </TableBody>
//   </Table>
// );

// export default UserDataTable;

import React from 'react';
import { Paper, Container, Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@mui/material';
import { FormData } from './types';

type TablePageProps = {
  userDataList: FormData[];
};

const TablePage: React.FC<TablePageProps> = ({ userDataList }) => {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h6" gutterBottom>
          User Data Table:
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User Title</TableCell>
              <TableCell>User First Name</TableCell>
              <TableCell>User Last Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userDataList.map((userData, index) => (
              <TableRow key={index}>
                <TableCell>{userData.user_title}</TableCell>
                <TableCell>{userData.user_firstName}</TableCell>
                <TableCell>{userData.user_lastName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default TablePage;

