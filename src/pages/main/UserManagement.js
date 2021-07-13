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
import clsx from 'clsx';
import AccountForm from '../../components/AccountForm';

const columns = [
  { field: 'id', headerName: 'Số điện thoại', width: 160 },
  { field: 'fullname', headerName: 'Họ và tên', width: 170, editable: true },
  { field: 'email', headerName: 'Email', width: 215, editable: true },
  {
    field: 'birthdate',
    headerName: 'Ngày sinh',
    type: 'date',
    width: 140,
    editable: true,
  },
  { field: 'gender', headerName: 'Giới tính', width: 135, editable: true },
  {
    field: 'status',
    headerName: 'Trạng thái',
    width: 150,
    editable: true,
    cellClassName: (params) =>
      clsx('super-app', {
        busy: params.value === 'Đang bận',
        available: params.value === 'Đang rảnh',
      }),
  },
  {
    field: 'start',
    headerName: 'Ngày vào làm',
    width: 180,
    type: 'date',
    editable: true,
  },
  // {
  //   field: 'end',
  //   headerName: 'Nghỉ việc',
  //   width: 135,
  //   type: 'date',
  //   editable: true,
  // },
];

const rows = [
  {
    id: '0988246809',
    fullname: 'Vu Thu Giang',
    email: 'vuthugiang2610@gmail.com',
    birthdate: '6/1/2000',
    gender: 'Nữ',
    status: 'Đang rảnh',
    start: '26/10/2018',
  },
  {
    id: '0988246009',
    fullname: 'Tran Nhan',
    email: 'nhantran@gmail.com',
    birthdate: '9/1/2000',
    gender: 'Nam',
    status: 'Đang rảnh',
    start: '26/10/2018',
  },
  {
    id: '0988246709',
    fullname: 'Pham Hoang Bao',
    email: 'baohoangpham@gmail.com',
    birthdate: '6/1/2000',
    gender: 'Nam',
    status: 'Đang rảnh',
    start: '26/10/2018',
  },
  {
    id: '0988246209',
    fullname: 'Nguyen Van Hung',
    email: 'hungnguyen@gmail.com',
    birthdate: '6/1/2001',
    gender: 'Nam',
    status: 'Đang bận',
    start: '26/10/2018',
  },
  {
    id: '0988246109',
    fullname: 'Nguyen H.Minh Tu',
    email: 'tunhm@gmail.com',
    birthdate: '12/2/2000',
    gender: 'Nữ',
    status: 'Đang rảnh',
    start: '26/10/2018',
  },
  {
    id: '0988246309',
    fullname: 'Cao Ngoc Nhat Vy',
    email: 'vycnn@gmail.com',
    birthdate: '6/1/2002',
    gender: 'Nữ',
    status: 'Đang rảnh',
    start: '26/10/2018',
  },
  {
    id: '0988246409',
    fullname: 'John Wick',
    email: 'ongjohnvelog@gmail.com',
    birthdate: '6/1/2000',
    gender: 'Khác',
    status: 'Đang rảnh',
    start: '26/10/2018',
  },
  {
    id: '0988246509',
    fullname: 'Dao Thien Phuc',
    email: 'daothienphuc@gmail.com',
    birthdate: '6/1/2001',
    gender: 'Nam',
    status: 'Đang rảnh',
    start: '26/10/2018',
  },
  {
    id: '0988246909',
    fullname: 'Vu Thu Thao',
    email: 'thaovu@gmail.com',
    birthdate: '6/4/2000',
    gender: 'Nữ',
    status: 'Đang rảnh',
    start: '26/10/2018',
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    height: 400,
    width: '99%',
    '& .super-app.busy': {
      color: '#ff0000',
      fontWeight: '600',
    },
    '& .super-app.available': {
      color: '#4caf50',
      fontWeight: '600',
    },
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
const UserManagement = () => {
  const classes = useStyles();
  const [acc, setAcc] = useState(rows);
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
    let flag = [...acc];
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
    setAcc(flag);
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
              Thêm Nhân Viên
            </h1>
            <AccountForm handleClose={handleClose} />
          </div>
        </Fade>
      </Modal>
      <Typography variant='h4' align='center' style={{ marginTop: 100 }}>
        Quản lý tài khoản nhân viên
      </Typography>
      <div className={classes.searchBox}>
        <SearchBox
          content='Tìm nhân viên theo số điện thoại'
          onInput={(value) => {
            const flag = [...rows];
            let result = [];
            result = flag.filter((item) => {
              if (item.id.toLowerCase().includes(value.toLowerCase())) {
                return true;
              }
              return false;
            });
            setAcc(result);
          }}
        />
        <div className={classes.rightPart}>
          <Button
            variant='contained'
            color='primary'
            style={{ marginRight: 10 }}
            onClick={handleOpen}
          >
            Thêm nhân viên
          </Button>
          <Button
            variant='contained'
            color='secondary'
            onClick={handleDelete}
            disabled={selected.length > 0 ? false : true}
          >
            Xóa nhân viên
          </Button>
        </div>
      </div>
      <DataGrid
        rows={acc}
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
export default UserManagement;
