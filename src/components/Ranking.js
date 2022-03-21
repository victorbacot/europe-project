import '../styles/Country.css'
import { DataGrid } from '@mui/x-data-grid'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCountries } from '../redux/actions'

const columns = [
    { 
        field: 'country', 
        headerName: 'Pays', 
        valueGetter: (params) => {
            return params.row.flag + ' ' + params.row.name.common
        },
        sortable: false,
        flex: 1
    },
    { field: 'population', headerName: 'Population', flex: 1 },
    { field: 'area', headerName: 'Superficie (km²)', flex: 1 },
    { 
        field: 'gini', 
        headerName: 'Indice de Gini (%)', 
        valueGetter: (params) => {
            return (params.row.gini == undefined) ? '' : Object.values(params.row.gini)[0]
        },
        flex: 1
    }
]

function Ranking() {

    const countries = useSelector(state => state.countries)
    const dispatch = useDispatch()

    // Récupération des données de l'API dans le store
    useEffect(() => {
        dispatch(getCountries())
    }, [])

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={countries}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                getRowId={(row) => row.cca2} // Identifiant unique
                initialState={{
                    sorting: {
                        sortModel: [{ field: 'population', sort: 'desc' }] // Tri par défaut
                    }
                }}
            />
        </div>
    )
}

export default Ranking