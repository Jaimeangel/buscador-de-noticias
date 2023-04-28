import {FormControl,InputLabel,Select,MenuItem,Button,Box} from '@mui/material';
import useNoticiasContext from '../hooks/useNoticiasContext';


const CATEGORIAS = [
  { value: 'general', label: 'General'},
  { value: 'business', label: 'Negocios'},
  { value: 'entertainment', label: 'Entretenimiento'},
  { value: 'health', label: 'Salud'},
  { value: 'science', label: 'Ciencia'},
  { value: 'sports', label: 'Deportes'},
  { value: 'technology', label: 'Tecnología'},
]

function Formulario() {

    const {categoria,handleSetCategoria}=useNoticiasContext()

    return (
        <form>
            <FormControl fullWidth>
                <InputLabel>Categoria</InputLabel>
                <Select
                    label='Categoria'
                    value={categoria}
                    onChange={handleSetCategoria}
                >
                    {
                        CATEGORIAS.map((categoria)=>(
                            <MenuItem
                                key={categoria.value}
                                value={categoria.value}
                            >
                                {categoria.label}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </form>
    )
}

export default Formulario;
