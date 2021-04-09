import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from 'src/components/Page';
import { getQuizList } from 'src/utils/Api';
import Toolbar from './Toolbar';
import ProductCard from './ProductCard';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));
const ProductList = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getList() {
      const user = JSON.parse(localStorage.getItem('brainaly_user'));
      await getQuizList({ userid: user.userId }).then((res) => {
        const productsArray = [];
        for (let i = 0; i < res.result.length; i++) {
          const newData = {
            title: res.result[i].q_name,
            length: JSON.parse(res.result[i].q_content).length,
            description: res.result[i].q_description,
            id: res.result[i].q_uid,
            media: res.result[i].q_cover === '' ? '/static/collection.png' : `http://localhost:3001/upload/${res.result[i].q_cover}`,
          };
          productsArray.push(newData);
          console.log(res.result[i]);
        }
        setProducts(productsArray);
      });
    }
    getList();
  }, []);
  async function refresh() {
    const user = JSON.parse(localStorage.getItem('brainaly_user'));
    await getQuizList({ userid: user.userId }).then((res) => {
      const productsArray = [];
      for (let i = 0; i < res.result.length; i++) {
        const newData = {
          title: res.result[i].q_name,
          length: JSON.parse(res.result[i].q_content).length,
          description: res.result[i].q_description,
          media: res.result[i].q_cover === '' ? '/static/collection.png' : `http://localhost:3001/upload/${res.result[i].q_cover}`,
          id: res.result[i].q_uid
        };
        productsArray.push(newData);
        console.log(res.result[i]);
      }
      setProducts(productsArray);
    });
  }
  return (
    <Page
      className={classes.root}
      title="Questions"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {products.map((product) => (
              <Grid
                item
                key={product.id}
                lg={12}
                md={12}
                xs={12}
              >
                <ProductCard
                  className={classes.productCard}
                  product={product}
                  handleRefresh={refresh}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Page>
  );
};

export default ProductList;
