import '../styles/Country.css'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import { useState } from 'react'

function Country(props) {

    const [open, setOpen] = useState(false)
    
    const handleClickOpen = () => {
        setOpen(true)
    }
    
    const handleClose = () => {
        setOpen(false)
    }

    const message = "L’indice de Gini est un indicateur synthétique d’inégalités de salaires, variant entre 0 et 1. L’inégalité est d’autant plus forte que l’indice de Gini est élevé."
    const data = props.country
    var languages = new String()
    var currency = new String()
    var giniIndex = new String()

    // Cas où plusieurs langues sont parlées dans un pays
    for (let key in data.languages)
        languages += data.languages[key] + ", "
    
    languages = languages.slice(0, -2)
    currency = Object.keys(data.currencies)[0] + " (" + Object.values(data.currencies)[0].symbol + ")"
    giniIndex = (data.gini == undefined) ? "Non défini" : (Object.values(data.gini)[0]/100).toLocaleString()

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <h1>
                    {data.name.common}
                    <span><img loading="lazy" width="50" src={data.flags.png} alt="" /></span>
                </h1>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h6" component="div">
                    <b>Population</b>
                </Typography>
                {data.population.toLocaleString()} hab.
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h6" component="div">
                    <b>Capitale</b>
                </Typography>
                {data.capital[0]}
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h6" component="div">
                    <b>{Object.keys(data.languages).length > 1 ? 'Langues' : 'Langue'}</b>
                </Typography>
                {languages}
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h6" component="div">
                    <b>Superficie</b>
                </Typography>
                {data.area.toLocaleString()} km²
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h6" component="div">
                    <b>Monnaie</b>
                </Typography>
                {currency}
            </Grid>
            <Grid item xs={6}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Typography variant="h6" component="div">
                        <b>Indice de Gini</b>
                    </Typography>
                    <IconButton aria-label="info" size="small" onClick={handleClickOpen}>
                        <InfoIcon fontSize="inherit" />
                    </IconButton>
                </div>
                {giniIndex}
            </Grid>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>
                    <b>Indice de Gini</b>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>{message}</DialogContentText>
                </DialogContent>
            </Dialog>
        </Grid>
    )
}

export default Country