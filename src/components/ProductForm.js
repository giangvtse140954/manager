import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const ProductForm = (props) => {
  const classes = useStyles();

  const handleClose = () => {
    props.handleClose();
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          title='Nhập thông tin dịch vụ'
          style={{ marginLeft: '10px' }}
        />
        <CardContent style={{ textAlign: 'center' }}>
          <form className={classes.form} noValidate autoComplete='off'>
            <TextField
              id='outlined-basic'
              label='Mã dịch vụ'
              required
              variant='outlined'
              placeholder='WI'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id='outlined-basic'
              label='Tên dịch vụ'
              variant='outlined'
              required
              placeholder='Thay má phanh'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id='outlined-basic'
              label='Giá bán từ'
              variant='outlined'
              required
              placeholder='10.000'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id='outlined-basic'
              label='Giá bán đến'
              required
              variant='outlined'
              placeholder='10.000'
              InputLabelProps={{
                shrink: true,
              }}
            />
          </form>
        </CardContent>
      </Card>
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          variant='contained'
          color='primary'
          style={{ marginRight: 10 }}
          onClick={handleClose}
        >
          Thêm
        </Button>
        <Button variant='contained' color='secondary' onClick={handleClose}>
          Hủy bỏ
        </Button>
      </div>
    </div>
  );
};

export default ProductForm;
