import React from 'react'
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'level', headerName: 'Level' },
  {
    field: 'delay',
    headerName: 'Delay',
    type: 'number',
    width: 90,
  },
  {
    field: 'description',
    headerName: 'Description',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 500,
    // valueGetter: (params) =>
    //   `${params.getValue('firstName') || ''} ${
    //     params.getValue('name') || ''
    //   }`,
  },
  {
    field: 'stack',
    headerName: 'Stack',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 500,
    // valueGetter: (params) =>
    //   `${params.getValue('firstName') || ''} ${
    //     params.getValue('name') || ''
    //   }`,
  },
  { field: 'status', headerName: 'Status', width: 150 },

];

const rows = [
  { id: 1, name: 'UCPA Formation', description: 'Cours en ligne', level: 8, category:"fullstack" , status:"En attente", stack:"React, NodeJS, Express, MongoDB"},
  { id: 2, name: 'Instagram API', description: 'Récupérer des données de la API Instagram', level: 5, category:"back-end" , status:"En attente", stack:"NodeJS, Express"},
  { id: 3, name: '3D', description: 'Essayer 3JS', level: 4, category:"front-end" , status:"En attente", stack:"Javascript, ThreeJS, HTML, CSS" },
  { id: 4, name: 'Google API', description: 'Communiquer avec la Gapi', level: 4 , category:"back-end" , status:"En attente", stack:"NodeJS, Express"},
  { id: 5, name: 'Reverse scroll', description: 'Creer un scroll en 2 section', level: 2, category:"front-end" , status:"En attente", stack:"HTML, CSS"},

];

function DataGridDemo() {
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection onSelectionChange={console.log}/>
    </div>
  );
}
const Labs = () => {
    return (
        <div>
           <h1>Labs</h1> 
            <DataGridDemo />
        </div>
    )
}



export default Labs
