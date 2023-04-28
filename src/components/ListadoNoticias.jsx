import {Typography,Grid,Stack,Pagination} from '@mui/material';
import useNoticiasContext from '../hooks/useNoticiasContext';
import Noticia from './Noticia';

function ListadoNoticias() {

    const {noticias,totalResults,page,handleSetPage}=useNoticiasContext()
    const totalPaginas=Math.ceil(totalResults/20) 
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
            <Stack
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{
                    marginTop:7,
                    marginBottom:7
                }}
            >
                <Pagination 
                    count={totalPaginas} 
                    color="primary" 
                    onChange={handleSetPage}
                    page={page}
                />
            </Stack>
        </>
    )
}

export default ListadoNoticias;
