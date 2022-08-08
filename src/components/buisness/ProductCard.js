import React from "react";
import {Box, Card, CardActions, CardContent, CardMedia, Chip, Grid, IconButton, Stack, Typography} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

/**
 *
 * props = {
 *  id: string,
 *  name: string,
 *  cover: string,
 *  price: number,
 *  quantity: number,
 *  promotion: number
 * }
 * @returns {JSX.Element}
 */
function ProductCard(props) {
    const isInPromotion = props.promotion > 0;
    const reducedPrice = (1-(props.promotion/100)) * props.price;
    const originalPrice = props.price;
    const calculatedPrice = isInPromotion ? reducedPrice : originalPrice;

    const chipValue = props.quantity > 0
        ? {
            label: 'EN STOCK',
            color: 'success'
        }
        : {
            label: 'RUPTURE',
            color: 'error'
        }

    return (
        <Grid item xs={12} sm={6} lg={4} sx={{ paddingBottom: '3%' }} key={props.id}>
            <Card>
                <div>
                    <CardMedia
                        component="img"
                        alt={`${props.id} cover`}
                        sx={{
                            height: 250,
                            objectFit: 'contain'
                        }}
                        image={props.image}
                    />
                </div>

                <CardContent
                    sx={{
                        paddingBottom: '16px !important',
                    }}
                >
                    <Typography sx={{width: '100%', textAlign: 'center'}}>
                        {props.name}
                    </Typography>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            paddingTop: '10px'
                        }}
                    >
                        <Chip
                            label={chipValue.label}
                            color={chipValue.color}
                            size={"small"}
                            sx={{
                                fontSize: '10px',
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingTop: '15px'
                        }}
                    >
                        <Stack direction={"row"} spacing={1}>
                            <Typography sx={{color: isInPromotion ? 'red' : 'default'}}>
                                {`${calculatedPrice}€`}
                            </Typography>
                            {
                                isInPromotion && (
                                    <Typography sx={{textDecoration: "line-through"}}>
                                        {`${originalPrice}€`}
                                    </Typography>
                                )
                            }
                        </Stack>
                        <IconButton>
                            <AddShoppingCartIcon sx={{fontSize: 30}}/>
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    )

}
export default ProductCard;
