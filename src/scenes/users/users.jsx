import React from 'react';
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
//Mock Data CHANGE TO REAL DATA!!!
import { mockDataTeam } from "../../data/mockData";

import Header from "../../components/Header";

const Users = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [users, setUsers] = useState([]);
    const columns = [
      { field: "id", headerName: "ID" },
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
      }
    ];
    
    useEffect( () => {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3050/api/users/alls`);
          const data = await response.json();
          setProfession(data);
        } catch (error) {
          console.log("Error: ", error)
        }
      };
      fetchData();
    }, [profession]); // Dependencia en profession para que se ejecute cuando cambie
    // Función para cambiar el valor de profession
    const handleProfessionChange = (newProfession) => {
      setProfession(newProfession);
  };
  
    return (
      <Box m="20px">
        <Header title="Users" subtitle="All Users Information" />
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
        </Box>
      </Box>
    );
  };
  
  export default Users;