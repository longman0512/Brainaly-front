import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles,
  Button,
  Menu,
  MenuItem
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Zoom from 'react-reveal/Zoom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(3)
  },
  quAvatar: {
    width: 100
  },
  hambergerContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  menuItem: {
    width: 100
  },
  menuIcon: {
    marginRight: theme.spacing(1)
  }
}));

const ProductCard = ({ className, product, ...rest }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const editQu = () => {
    console.log('edit');
    handleMenuClose();
  };
  const deleteQu = () => {
    console.log('delete');
    handleMenuClose();
  };
  return (
    <Zoom>
      <Card
        className={clsx(classes.root, className)}
        {...rest}
      >
        <CardContent>
          <Grid
            container
            flexDirection="row"
            spacing={2}
          >
            <Grid
              item
              xl={2}
              lg={2}
              md={2}
              xs={12}
            >
              <Box
                display="flex"
                justifyContent="flex-start"
                mb={3}
              >
                <Avatar
                  alt="Product"
                  src={product.media}
                  variant="square"
                  className={clsx(classes.quAvatar, className)}
                />
              </Box>
            </Grid>
            <Grid
              item
              xl={10}
              lg={10}
              md={10}
              xs={12}
              container
              justifyContent="space-between"
              flexDirection="row"
            >
              <Grid
                item
                xl={11}
                lg={11}
                md={11}
                xs={11}
              >
                <Typography
                  align="left"
                  color="textPrimary"
                  gutterBottom
                  variant="h4"
                >
                  {product.title}
                </Typography>
                <Typography
                  align="left"
                  color="textPrimary"
                  variant="body1"
                >
                  {product.description}
                </Typography>
              </Grid>
              <Grid
                item
                xl={1}
                lg={1}
                md={1}
                xs={1}
                className={classes.hambergerContainer}
              >
                <MoreVertIcon
                  onClick={handleMenuClick}
                />
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleMenuClose}
                >
                  <MenuItem key={product.id} className={classes.menuItem} onClick={editQu}>
                    <EditIcon className={classes.menuIcon} />
                    {' '}
                    Edit
                  </MenuItem>
                  <MenuItem key={`${product.id}1`} className={classes.menuItem} onClick={deleteQu}>
                    <DeleteIcon className={classes.menuIcon} />
                    Delete
                  </MenuItem>
                </Menu>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <Box flexGrow={1} />
        <Divider />
        <Box p={2}>
          <Grid
            container
            justify="space-between"
            spacing={2}
          >
            <Grid
              className={classes.statsItem}
              item
            >
              <AccessTimeIcon
                className={classes.statsIcon}
                color="action"
              />
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                Created at 2021-02-03
              </Typography>
              <PlayArrowIcon
                className={classes.statsIcon}
                color="action"
              />
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                {product.totalDownloads}
                {' '}
                Plays
              </Typography>
            </Grid>
            <Grid
              className={classes.statsItem}
              item
            >
              <Button variant="contained" color="primary">
                Play
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Zoom>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
