import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchProductsRequest} from "../redux/modules/products/actions";
import CustomCarousel from "../components/buisness/CustomCarousel";
import {ProductsState} from "../redux/modules/products";
import ProductCard from "../components/buisness/ProductCard";
import {Box, Paper, Typography} from "@mui/material";
import {fetchCategoriesRequest} from "../redux/modules/categories/actions";
import {CategoryState} from "../redux/modules/categories";


export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategoriesRequest());
        dispatch(fetchProductsRequest());
    },[]);

    const promotions = useSelector(ProductsState.selectors.promotions);
    const newProducts = useSelector(ProductsState.selectors.newProducts);
    const categories = useSelector(CategoryState.selectors.allCategories);
    const allBrands = useSelector(ProductsState.selectors.allBrands);

    return (
        <>
            <Box
                sx={{
                    paddingTop: '100px'
                }}
            >
                <Typography variant={'h4'} sx={{textAlign: 'center'}}>Promotions</Typography>
                <CustomCarousel nbItems>
                    {
                        promotions.map(
                            p => (
                                <Box sx={{padding: '0 2%'}}>
                                    <ProductCard
                                        id={p.id}
                                        name={p.name}
                                        cover={p.cover}
                                        price={p.price}
                                        quantity={p.quantity}
                                        promotion={p.promotion}
                                    />
                                </Box>
                            )
                        )
                    }
                </CustomCarousel>
            </Box>

            <Box sx={{paddingTop: '100px'}}>
                <Typography
                    variant={'h5'}
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    Nos catégories
                </Typography>
                <CustomCarousel nbItems={{L: 7, M: 4, S:2, XS: 1 }}>
                    {
                        categories.map(
                            category => (
                                <Box sx={{
                                    padding: '0 10px 0 0'
                                }}>
                                    <Paper
                                        key={category.id}
                                        onClick={() => console.log('test')}
                                        elevation={3}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent:'center',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                padding: 3,
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            {category.name}
                                        </Typography>
                                    </Paper>
                                </Box>
                            )
                        )
                    }
                </CustomCarousel>
            </Box>
            <Box sx={{paddingTop: '100px'}}>
                <Typography variant={'h4'} sx={{textAlign: 'center'}}>Nos nouveautés</Typography>
                <CustomCarousel nbItems>
                    {
                        newProducts.map(
                            p => (
                                <Box sx={{padding: '0 2%'}}>
                                    <ProductCard
                                        id={p.id}
                                        name={p.name}
                                        cover={p.cover}
                                        price={p.price}
                                        quantity={p.quantity}
                                    />
                                </Box>
                            )
                        )
                    }
                </CustomCarousel>
            </Box>
            <Box sx={{paddingTop: '100px'}}>
                <Typography
                    variant={'h5'}
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    Nos marques
                </Typography>
                <CustomCarousel nbItems={{L: 7, M: 4, S:2, XS: 1 }}>
                    {
                        allBrands.map(
                            brand => (
                                <Box
                                sx={{
                                    padding: '0 10px 0 0',
                                }}
                                >
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Typography sx={{padding: 3}}>{brand}</Typography>
                                    </Paper>
                                </Box>
                            )
                        )
                    }

                </CustomCarousel>
            </Box>
        </>
    )
}
