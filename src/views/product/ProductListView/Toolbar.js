/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  CircularProgress,
  Typography
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import StoreContext from 'src/context/index';
import { newQuiz } from 'src/utils/Api';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  quizName: {
    width: '100%',
  },
  progressBar: {
    fontSize: 20,
    color: 'purple',
    marginLeft: 10
  },
  none: {
    display: 'none'
  },
  valid: {
    display: 'block',
    color: 'red'
  },
  quizDesc: {
    marginTop: 15,
    width: '100%'
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { store, setStore } = React.useContext(StoreContext);
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [valid, setValid] = useState('none');
  const [newTitle, setNewTitle] = useState('');
  const [briefValid, setBriefValid] = useState('none');
  const [description, setDescription] = useState('');
  const handleClose = () => {
    setOpen(false);
    setIsLoading(false);
  };
  function chr4() {
    return Math.random().toString(16).slice(-4);
  }
  function uniqueID() {
    return `${chr4() + chr4()}-${chr4()}-${chr4()}-${chr4()}-${chr4()}${chr4()}${chr4()}`;
  }

  const handleNew = async () => {
    if (newTitle.length < 3) {
      setValid('valid');
    } else if (description.length < 10) {
      setBriefValid('valid');
      setValid('none');
    } else {
      setValid('none');
      setBriefValid('none');
      setIsLoading(true);
      const item = [{
        href: '',
        title: '',
        quizType: 1,
        image: '',
        quizAnswer: [
          {
            sel: 0,
            answer: ''
          },
          {
            sel: 0,
            answer: ''
          },
          {
            sel: 0,
            answer: ''
          },
          {
            sel: 0,
            answer: ''
          },
        ],
        quizTime: 20,
        point: 2
      }];
      const newData = JSON.stringify(item);
      const data = {
        uid: uniqueID(),
        content: newData,
        title: newTitle,
        description
      };
      await newQuiz(data).then((res) => {
        console.log('data', res);
        setStore({
          ...store,
          items: item
        });
        navigate(`/user/new?id=${res.data.uid}`, { replace: true });
      });
    }
  };
  async function goAddNewQuiz() {
    setOpen(true);
  }
  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableBackdropClick
        disableEscapeKeyDown
      >
        <DialogTitle id="alert-dialog-title">Create a New Quiz</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField
              variant="outlined"
              className={classes.quizName}
              label="Quiz Name"
              value={newTitle}
              id="outlined-basic"
              onChange={(event) => {
                setNewTitle(event.target.value);
              }}
            />
            <Typography color="warnred" variant="body2" className={classes[valid]}>
              * Please enter at least 3 characters
            </Typography>
            <TextField
              variant="outlined"
              className={classes.quizDesc}
              label="Description"
              value={description}
              id="outlined-basic"
              multiline
              rows={3}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <Typography color="warnred" variant="body2" className={classes[briefValid]}>
              * Please enter at least 10 characters
            </Typography>
          </DialogContentText>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" disabled={isLoading} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleNew} disabled={isLoading} color="secondary" autoFocus>
            Create
            {' '}
            {isLoading && <CircularProgress color="nice" size={20} className={classes.progressBar} />}
          </Button>
        </DialogActions>
      </Dialog>
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        {/* <Button className={classes.importButton}>
          Import
        </Button>
        <Button className={classes.exportButton}>
          Export
        </Button> */}
        <Button
          color="primary"
          variant="contained"
          onClick={goAddNewQuiz}
        >
          Add QUIZ
        </Button>
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search quiz"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
