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
import ServiceForm from '../../components/ServiceForm';

const columns = [
  { field: 'id', headerName: 'Mã hàng', width: 140 },
  { field: 'product', headerName: 'Tên sản phẩm', width: 500, editable: true },
  { field: 'service', headerName: 'Tên dịch vụ', width: 215, editable: true },
  {
    field: 'quantity',
    headerName: 'Số lượng',
    width: 200,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Đơn giá',
    type: 'number',
    width: 140,
    editable: true,
  },
];

const rows = [
  {
    id: 'CB000',
    product: 'Bình GS GT5A 12V-5Ah',
    service: 'Thay bình xe',
    price: '360.000',
    quantity: '6 bình',
  },
  {
    id: 'CB001',
    product: 'Bình GS GTZ6V',
    service: 'Thay bình xe',
    price: '460.000',
    quantity: '14 bình',
  },
  {
    id: 'CB002',
    product: 'Bình Panasonic LC-V127R2NA 12V 7.2AH',
    service: 'Thay bình xe',
    price: '540.000',
    quantity: '32 bình',
  },
  {
    id: 'RB000',
    product: 'Phanh xe trợ lực',
    service: 'Thay phanh xe',
    price: '110.000',
    quantity: '3 cái',
  },
  {
    id: 'RB001',
    product: 'Phanh xe cân bằng',
    service: 'Thay phanh xe',
    price: '220.000',
    quantity: '4 cái',
  },
  {
    id: 'TT001',
    product: 'Lốp xe Valve extra',
    service: 'Thay lốp xe',
    price: '160.000',
    quantity: '124 Lốp',
  },
  {
    id: 'TT002',
    product: 'Lốp xe Vancouver',
    service: 'Thay lốp xe',
    price: '200.000',
    quantity: '24 Lốp',
  },
  {
    id: 'WI000',
    product: 'Bánh xe 10CMS',
    service: 'Thay bánh xe',
    price: '300.000',
    quantity: '2 cái',
  },
  {
    id: 'WI001',
    product: 'Cặp bánh trước xe Mercedes 21 inch',
    service: 'Thay bánh xe',
    price: '16.300.000',
    quantity: '7 cặp',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    height: 400,
    width: '99%',
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
const ServiceManagement = () => {
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
              Thêm sản phẩm
            </h1>
            <ServiceForm handleClose={handleClose} />
          </div>
        </Fade>
      </Modal>
      <Typography variant='h4' align='center' style={{ marginTop: 100 }}>
        Sản phẩm sửa xe
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
            content='Tìm sản phẩm theo tên'
            onInput={(value) => {
              const flag = [...rows];
              let result = [];
              result = flag.filter((item) => {
                if (item.product.toLowerCase().includes(value.toLowerCase())) {
                  return true;
                }
                return false;
              });
              setProduct(result);
            }}
          />
          <SearchBox
            content='Tìm sản phẩm theo dịch vụ'
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
            Thêm sản phẩm
          </Button>
          <Button
            variant='contained'
            color='secondary'
            onClick={handleDelete}
            disabled={selected.length > 0 ? false : true}
          >
            Xóa sản phẩm
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

export default ServiceManagement;
