import {Typography,Grid} from '@mui/material';
import useNoticiasContext from '../hooks/useNoticiasContext';
import Noticia from './Noticia';

function ListadoNoticias() {

    const {noticias}=useNoticiasContext()

    return (
        <>
        <Typography
            textAlign={'center'}
            variant='h4'
            component={'h4'}
            marginY={4}
        >
            Ultimas noticias
        </Typography>
        <Grid 
            container
            justifyContent={'center'}
            spacing={3}
        >
            {
                noticias.map(noticia=>(
                    <Noticia
                        key={noticia.url}
                        noticia={noticia}
                    />
                ))
            }
        </Grid>
        </>
    )
}

export default ListadoNoticias;
