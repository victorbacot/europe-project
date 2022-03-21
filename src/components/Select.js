import '../styles/Select.css'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCountries } from '../redux/actions'
import Country from './Country'

function Select() {

  const countries = useSelector(state => state.countries)
  const dispatch = useDispatch()
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
      dispatch(getCountries())
  }, [])

  return (
    <div className="select">
      <Autocomplete
        id="country-select"
        //sx={{ width: 300 }}
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.name.common}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <img
              loading="lazy"
              width="20"
              src={option.flags.png}
              alt=""
            />
            {option.name.common} ({option.cca2})
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choisissez un pays"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password' // disable autocomplete and autofill
            }}
          />
        )}
        noOptionsText={'Aucun résultat'}
        onChange={(event, value) => setSelectedCountry(value)}
      />
      {selectedCountry != null &&
        <Country country={selectedCountry} />
      }
    </div>
  )
}

export default Select