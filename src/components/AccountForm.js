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
const AccountForm = (props) => {
  const classes = useStyles();
  const [gender, setGender] = React.useState('');

  const handleClose = () => {
    props.handleClose();
  };

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          title='Nhập thông tin tài khoản'
          style={{ marginLeft: '10px' }}
          // subheader='Tạo tài khoản'
        />
        <CardContent style={{ textAlign: 'center' }}>
          <form className={classes.form} noValidate autoComplete='off'>
            <TextField
              id='outlined-basic'
              label='Tài khoản'
              required
              variant='outlined'
              placeholder='0123456789'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id='outlined-basic'
              label='Mật khẩu'
              variant='outlined'
              required
              type='password'
              placeholder='******'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id='outlined-basic'
              label='Họ và tên'
              variant='outlined'
              required
              placeholder='Juli Baker'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id='outlined-basic'
              label='Email'
              required
              variant='outlined'
              placeholder='example@yeah.ok'
              type='email'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id='outlined-basic'
              label='Ngày sinh'
              variant='outlined'
              required
              type='date'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormControl
              variant='outlined'
              className={classes.formControl}
              required
            >
              <InputLabel id='demo-simple-select-outlined-label'>
                Gender
              </InputLabel>
              <Select
                labelId='demo-simple-select-outlined-label'
                id='demo-simple-select-outlined'
                value={gender}
                onChange={handleChange}
                label='Gender'
              >
                <MenuItem value={0}>Khác</MenuItem>
                <MenuItem value={1}>Nữ</MenuItem>
                <MenuItem value={2}>Nam</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id='outlined-basic'
              label='Ngày vào làm'
              variant='outlined'
              required
              type='date'
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

export default AccountForm;
