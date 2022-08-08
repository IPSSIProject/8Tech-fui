import React, {useEffect} from "react";
import ProductList from "../components/buisness/ProductList";
import {Container, Skeleton} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductsRequest} from "../redux/modules/products/actions";
import {ProductsState} from "../redux/modules/products";

export  default function Products() {
    const productStatus = useSelector(ProductsState.selectors.productsStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        if (['fetched', 'loading'].includes(productStatus)) {
            return
        }
        dispatch(fetchProductsRequest());

    }, [productStatus]);

    return (
        <div>
            <Container sx={{paddingTop: '100px', paddingBottom: '100px', maxWidth: '1300px'}} maxWidth={'none'}>
                {
                    productStatus !== 'fetched'
                        ? (
                            <Skeleton>
                                <ProductList />
                            </Skeleton>
                        ) : (
                            <ProductList />
                        )
                }
            </Container>
        </div>

    )
}
