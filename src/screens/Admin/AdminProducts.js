import {useDispatch, useSelector} from "react-redux";
import {ProductsState} from "../../redux/modules/products";
import {Box, Button, IconButton, Paper, Stack, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";
import AdminPage from "./AdminPage";
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from "react-router-dom";
import deleteProduct from "../../redux/modules/apiCall/deleteProduct";
import {fetchProductsRequest} from "../../redux/modules/products/actions";

export default function AdminProducts() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector(ProductsState.selectors.allProducts);

    const removeProduct = async (productId) => {
        await deleteProduct(productId);
        dispatch(fetchProductsRequest());
    }

    const editProduct = (productId) => {
        navigate('/admin-space/edit-product', {state: {
            productId,
            }})
    }

    return (
        <AdminPage title={'Listes des produits'}>
            <Stack alignItems={'flex-end'}>
                <Button startIcon={<AddIcon />} variant={'contained'} onClick={() => navigate('/admin-space/new-product')}>
                    Ajouter un produit
                </Button>
            </Stack>
            <Paper variant={'outlined'} sx={{overflow: 'auto', height: '50%', mt: 2}}>
                <Table stickyHeader sx={{ minWidth: 650, height: 'fit-content' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nom</TableCell>
                            <TableCell>Marque</TableCell>
                            <TableCell>Prix</TableCell>
                            <TableCell>Quantité</TableCell>
                            <TableCell>Promotion (en %)</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((p) => (
                            <>
                                <TableRow
                                    key={p.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {p.name}
                                    </TableCell>
                                    <TableCell>{p.brand}</TableCell>
                                    <TableCell>{`${p.price}€`}</TableCell>
                                    <TableCell>{p.quantity}</TableCell>
                                    <TableCell>{`${p.promotion}%`}</TableCell>
                                    <TableCell align={'right'}>
                                        <Stack direction={'row'} spacing={2} alignItems={'center'}>
                                            <IconButton onClick={() => editProduct(p.id)}>
                                                <EditIcon color={'primary'} />
                                            </IconButton>
                                            <IconButton onClick={() => removeProduct(p.id)}>
                                                <DeleteForeverIcon color={'error'} />
                                            </IconButton>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            </>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </AdminPage>
    )
}

async function removeProduct(productId) {


}
