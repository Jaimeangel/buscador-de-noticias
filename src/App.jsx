import {Container,Typography,Grid} from '@mui/material';
import Formulario from './components/Formulario';
import {NoticiasProvider} from './context/NoticiasProvider'
function App() {
  return (
    <NoticiasProvider>
      <Container>

        <header>
          <Typography align='center' variant='h3' component='h1' marginY={5}>
              ESTO ES UN TITULO
          </Typography>
        </header>
        <Grid 
          container
          direction='row'
          justifyContent='center'
        >
          <Grid item md={7} xs={12} lg={7}>
            <Formulario/>
          </Grid>
        </Grid>

      </Container>
    </NoticiasProvider>
  )
}

export default App
