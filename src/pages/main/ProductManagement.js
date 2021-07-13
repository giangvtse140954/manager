import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import SearchBox from '../../components/SearchBox';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ProductForm from '../../components/ProductForm';

const columns = [
  { field: 'id', headerName: 'Mã dịch vụ', width: 200 },
  { field: 'service', headerName: 'Tên dịch vụ', width: 215, editable: true },
  {
    field: 'price',
    headerName: 'Tầm giá',
    width: 300,
    editable: true,
  },
];

const rows = [
  {
    id: 'CB',
    service: 'Thay bình xe',
    price: '360.000vnđ - 540.000vnđ',
  },
  {
    id: 'RB',
    service: 'Thay phanh xe',
    price: '110.000vnđ - 220.000vnđ',
  },
  {
    id: 'TT',
    service: 'Thay lốp xe',
    price: '160.000vnđ - 200.000vnđ',
  },

  {
    id: 'WI',
    service: 'Thay bánh xe',
    price: '300.000vnđ - 16.300.000vnđ',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    height: 350,
    width: '99%',
    // marginBottom: '100px',
  },
  searchBox: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 50,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const ProductManagement = () => {
  const classes = useStyles();
  const [product, setProduct] = useState(rows);
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onHandleClick = (e) => {
    // console.log(e.row);
  };
  const handleDelete = () => {
    let flag = [...product];
    for (let i = 0; i < selected.length; i++) {
      let j = 0;
      while (j < flag.length) {
        if (selected[i] === flag[j].id) {
          console.log(j);
          flag.splice(j, 1);
        } else {
          j = j + 1;
        }
      }
    }
    setProduct(flag);
  };
  return (
    <div className={classes.root}>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h1
              id='transition-modal-title'
              style={{ lineHeight: '80px', textAlign: 'center' }}
            >
              Thêm dịch vụ
            </h1>
            <ProductForm handleClose={handleClose} />
          </div>
        </Fade>
      </Modal>

      <Typography variant='h4' align='center' style={{ marginTop: 100 }}>
        Dịch vụ sửa xe
      </Typography>
      <div className={classes.searchBox}>
        <div
          style={{
            display: 'flex',
            width: '630px',
            justifyContent: 'space-between',
          }}
        >
          <SearchBox
            content='Tìm dịch vụ theo tên'
            onInput={(value) => {
              const flag = [...rows];
              let result = [];
              result = flag.filter((item) => {
                if (item.service.toLowerCase().includes(value.toLowerCase())) {
                  return true;
                }
                return false;
              });
              setProduct(result);
            }}
          />
        </div>
        <div className={classes.rightPart}>
          <Button
            variant='contained'
            color='primary'
            style={{ marginRight: 10 }}
            onClick={handleOpen}
          >
            Thêm dịch vụ
          </Button>
          <Button
            variant='contained'
            color='secondary'
            onClick={handleDelete}
            disabled={selected.length > 0 ? false : true}
          >
            Xóa dịch vụ
          </Button>
        </div>
      </div>
      <DataGrid
        rows={product}
        columns={columns}
        pageSize={5}
        checkboxSelection
        onRowClick={onHandleClick}
        onSelectionModelChange={(newSelection) => {
          setSelected(newSelection.selectionModel);
        }}
      />
    </div>
  );
};

export default ProductManagement;
