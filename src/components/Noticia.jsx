import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Link,
    Typography,
    Grid
} from '@mui/material';

function Noticia({noticia}) {
    const {urlToImage,url,title,description,source}=noticia;
    return (
        <Grid item sm={6} xs={12} md={4}>
            <Card >
                <CardMedia
                    component="img"
                    image={urlToImage}
                    alt={`Imagen en relacion con ${title}`}
                />

                <CardContent>
                    <Typography
                        color='error'
                        variant='body1'
                    >
                        {source.name}
                    </Typography>
                    <Typography
                        variant='h5'
                        component='div'
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant='body2'
                        component='div'
                    >
                        {description}
                    </Typography>
                </CardContent>

                <CardActions
                >
                    <Link
                        href={url}
                        target='_blanck'
                        variant='button'
                        width={'100%'}
                        textAlign={'center'}
                        sx={{
                            textDecoration:'none'
                        }}
                    >
                        Ver Noticia
                    </Link>
                </CardActions>

            </Card>
        </Grid>
    )
}

export default Noticia;
