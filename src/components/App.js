import '../styles/App.css'
import Grid from '@mui/material/Grid'
import Banner from './Banner'
import Select from './Select'
import Ranking from './Ranking'

function App() {
  return (
    <div className="App">
      <Banner />
      <div style={{margin: "1%"}}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Ranking />
          </Grid>
          <Grid item xs={6}>
            <Select />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default App;