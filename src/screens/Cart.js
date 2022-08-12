import {
    Stack, ToggleButton, ToggleButtonGroup,
    Typography
} from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useDispatch, useSelector} from "react-redux";
import {cartSelectors} from "../redux/modules/cart/cartSelectors";
import {ProductsState} from "../redux/modules/products";
import {submitAddProduct, submitDecrementQuantityProduct, submitRemoveOneProduct} from "../redux/modules/cart";
import {sessionSelectors} from "../redux/modules/session/sessionSelectors";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export default function Cart() {
    const navigate = useNavigate();
    const productsCart = useSelector(cartSelectors.cartItems);
    const products = useSelector(ProductsState.selectors.allProducts);


    // On map les produits et les ids produit dans le ponier pour faire un tableau des produits qui sont dans le panier
    // On y ajoute aussi la quantité du produit dans le panier
    const cartItems = productsCart.map(pc => {
            const p = products.find(p => pc?.product_id === p?.id);
            return {
                ...p,
                cartQuantity: pc?.quantity
            }
        }
    ).filter(p => p.cartQuantity);

    let totalPrice = 0;

    cartItems.forEach(item => {
        totalPrice += item.price * item.cartQuantity
    })

    return (
        <>
            <Typography variant={'h4'} textAlign={'center'}>Votre panier</Typography>
            <Stack direction={'column'} spacing={1} width={'100%'}>
                <Typography variant={'h5'}>Vos produits</Typography>
                <Stack direction={'row'} spacing={3}>
                    <Stack direction={'column'} sx={{backgroundColor: 'white'}} width={'75%'} justifyContent={'center'}>
                        {
                            cartItems.length > 0
                                ? cartItems.map(
                                    ci => (
                                        <CartItem
                                            id={ci.id}
                                            picture={'https://caer.univ-amu.fr/wp-content/uploads/default-placeholder.png'}
                                            price={ci.price}
                                            quantity={ci.cartQuantity}
                                            title={ci.name}
                                        />
                                    )
                                )
                                : (<EmptyCart />)
                        }
                    </Stack>

                    <Stack
                        direction={'column'}
                        padding={2}
                        width={'25%'}
                        sx={{backgroundColor: 'white'}}
                        spacing={2}
                        height={'fit-content'}
                    >
                        <Typography variant={'h6'} textAlign={'center'}>
                            Valeur du panier
                        </Typography>
                        <Typography>
                            {`Quantité de produits: ${cartItems.length}`}
                        </Typography>
                        <Typography>
                            {`Prix total: ${totalPrice}€`}
                        </Typography>
                        <Button
                            variant={'contained'}
                            disabled={cartItems.length === 0}
                            onClick={() => navigate('/payment')}
                        >
                            Passer la commande
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

function EmptyCart() {
    return (
        <Stack alignItems={'center'} justifyContent={'center'} width={'100%'}>
            <Typography sx={{color: 'darkgrey'}}>Votre panier est vide !</Typography>
        </Stack>
    )
}

/**
 *
 * @param id
 * @param title
 * @param price
 * @param quantity
 * @param picture
 * @return {JSX.Element}
 * @constructor
 */
function CartItem({id, title, price, quantity, picture}) {
    const dispatch = useDispatch();
    const userId = useSelector(sessionSelectors.userId);

    const decrementQuantityOfProduct = (userId, productId) => {
        dispatch(
            submitDecrementQuantityProduct({
                userId,
                productId,
            })
        )
    }

    return (
        <Stack key={id} direction={'row'} padding={'10px'} alignItems={'center'} borderBottom={'1px solid darkgrey'}>
            <img style={{height: '150px'}} src={picture} alt={''}/>
            <Stack direction={'column'} justifyContent={'space-between'} height={'80%'}>
                <Typography variant={'h6'}>
                    {title}
                </Typography>
                <Typography>
                    {`Prix: ${price}€`}
                </Typography>
                <Stack direction={'row'} spacing={2}>
                    <Stack direction={'row'} alignItems={'center'} spacing={1}>
                        <Typography>
                            {`Quantité: ${quantity}`}
                        </Typography>
                        <ToggleButtonGroup size={'small'}>
                            <ToggleButton
                                value={'plus'}
                                size={'small'}
                                onClick={() => dispatch(
                                    submitAddProduct({
                                        userId,
                                        productId: id
                                    })
                                )}
                            >
                                <AddIcon fontSize={'small'} color={'primary'} />
                            </ToggleButton>
                            <ToggleButton
                                value={'moins'}
                                onClick={() => decrementQuantityOfProduct(userId, id)}>
                                <RemoveIcon fontSize={'small'} color={'primary'} />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Stack>
                    <Button color={'error'} variant={'outlined'} onClick={() => dispatch(
                        submitRemoveOneProduct({
                                userId,
                                productId: id
                            }
                        )
                    )
                    }>
                        Supprimer
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}
