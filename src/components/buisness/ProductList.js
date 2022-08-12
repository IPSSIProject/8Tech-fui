import React, {useEffect, useState} from "react";
import ProductCard from "./ProductCard";
import {categoryList} from "../../data/ProductData"
import {
    Grid,
    Paper,
    Slider,
    MenuItem,
    Checkbox,
    ListItemText,
    Switch
} from "@mui/material";
import Select from '@mui/material/Select';
import ReactSelect from "react-select";
import '../../styles/ProductList.css'
import Separator from "../agnostic/Separator";
import {useLocation} from "react-router-dom";
import {ProductsState} from "../../redux/modules/products";
import {useSelector} from "react-redux";

/**
 *
 * @returns {JSX.Element}
 */
export default function ProductList() {

    const [products, setProducts] = useState([]);
    const allProducts = useSelector(ProductsState.selectors.allProducts);

    const handleProductsFilter = (products) => {
        setProducts(products)
    }

    return (
        <>
            <Grid container item maxWidth={"none"}>
                <ProductFilters handleProductsFilter={handleProductsFilter} products={allProducts}/>
                <Grid item xs={12} lg={9} className='grid-item-1'>
                    <Grid container spacing={2} xs={12}>
                        {
                            // On filtre l'array de produit en fonction du filtre choisi
                            // et on map pour afficher les produits filtrés
                            products.map(
                                (product) => {
                                    const {id, name, image, price, quantity} = product
                                    return (
                                        <ProductCard
                                            id={id}
                                            name={name}
                                            cover={image}
                                            price={price}
                                            quantity={quantity}
                                        />

                                    )
                                }
                            )
                        }
                    </Grid>
                </Grid>
            </Grid>

        </>


    )
}

function ProductFilters(props) {

    const { handleProductsFilter, products: allProducts } = props
    const currentRoute = useLocation();
    const query = currentRoute.state || {};

    const [category, setCategory] = useState();
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [brandFilter, setBrandFilter] = useState([]);
    const [promotion, setPromotion] = useState(false);

    useEffect(() => {
        handleProductsFilter(products)

    }, [category,priceRange,brandFilter,promotion])

    useEffect(() => {
        if (query.hasOwnProperty('promo') && query.promo) {
            setPromotion(true);
        } else {
            setPromotion(false);
        }
    }, [currentRoute])

    const handleChangePriceRange = (event, newValue) => {
        setPriceRange(newValue);
    };

    const handleChangeCategory = (event) => {
        setCategory(event)
    };

    const handleChangePromotion = () => {
        setPromotion(!promotion);
    }

    const brand = [
        'Corsair',
        'Logitech',
        'Asus',
        'Intel',
    ];

    const handleChangeBrandFilter = (event) => {
        const {
            target: {value},
        } = event;
        setBrandFilter(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const products = allProducts
        .filter(p => !promotion || p.promotion === promotion)
        .filter(p => !category || p.category_id === category?.value)
        .filter(p => brandFilter.length === 0 || brandFilter.indexOf(p.brand) > -1)
        .filter(p => priceRange[0] <= p?.price && priceRange[1] >= p?.price)

    return (
        <Grid item xs={12} lg={3} className='grid-item-1'>
            <Paper elevation={1} sx={{padding: '18px 27px'}}>
                <h3>Filtres</h3>
                <ReactSelect
                    isClearable={true}
                    isSearchable={true}
                    isDisabled={false}
                    placeholder={'Catégorie'}
                    options={categoryList}
                    onChange={handleChangeCategory}
                />
                <Separator/>
                <p>Prix</p>
                <Slider
                    getAriaLabel={() => 'Price range'}
                    value={priceRange}
                    onChange={handleChangePriceRange}
                    valueLabelDisplay="auto"
                    min={150}
                    max={1052}
                />
                <Separator/>
                <p>Marque</p>
                <Select
                    variant={"standard"}
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    value={brandFilter}
                    sx={{width: '100%'}}
                    placeholder={'Corsair, ...'}
                    onChange={handleChangeBrandFilter}
                    renderValue={(selected) => selected.join(', ')}
                    multiple
                >
                    {
                        brand.map(
                            (name) => (
                                <MenuItem key={name} value={name} >
                                    <Checkbox checked={brandFilter.indexOf(name) > -1}/>
                                    <ListItemText primary={name}/>
                                </MenuItem>
                            ))
                    }

                </Select>
                <Separator/>
                <p>Promo</p>
                <Switch
                    onChange={handleChangePromotion}
                    checked={promotion}
                />
            </Paper>
        </Grid>
    )
}
