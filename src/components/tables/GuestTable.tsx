import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

// Import theme context
import { useTheme } from '../../contexts/ThemeContext';

// Import CSS
import './GuestTable.css';

const columns: GridColDef<(typeof rows)[number]>[] = [
    {
        field: 'id',
        headerName: 'Código',
        width: 90,
        headerClassName: `text-black`,
    },
    {
        field: 'name',
        headerName: 'Nome',
        width: 150,
        editable: true,
        headerClassName: `text-black`,
    },
    {
        field: 'state',
        headerName: 'Estado',
        width: 150,
        editable: true,
        headerClassName: `text-black`,
    },


];

const rows = [
    { id: 1, name: 'Snow', },
    { id: 2, name: 'Lannister' },
    { id: 3, name: 'Lannister', },
    { id: 4, name: 'Stark', },
    { id: 5, name: 'Targaryen', },
    { id: 6, name: 'Melisandre', },
    { id: 7, name: 'Clifford', },
    { id: 8, name: 'Frances', },
    { id: 9, name: 'Roxie', },
];

export default function GuestTable() {
    const [theme,] = useTheme();
    const isDark = theme === 'dark';

    return (
        <Box sx={{ height: 400, width: '100%', }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                className={` ${isDark && 'dark:!bg-gray-800 dark:!text-gray-200 dark:!border-gray-600 meu-datagrid'}`}

            />
        </Box>
    );
}
