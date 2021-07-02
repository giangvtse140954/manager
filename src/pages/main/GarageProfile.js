import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import RoomIcon from '@material-ui/icons/Room';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '99%',
  },
  card: {
    marginTop: 50,
    padding: 20,
    display: 'flex',
  },
  card__img: {
    borderRadius: 5,
    width: '100%',
  },
  card__left: {
    marginRight: 50,
    width: 400,
  },
  card__right: {
    width: '100%',
  },
}));
const GarageProfile = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h4' align='center' style={{ marginTop: 100 }}>
        Tài khoản Garage
      </Typography>
      <Paper elevation={3} className={classes.card}>
        <div className={classes.card__left}>
          <img
            src='https://toplist.vn/images/800px/3mp-he-thong-sua-xe-may-chuyen-nghiep-375236.jpg'
            alt=''
            className={classes.card__img}
          />
        </div>
        <div className={classes.card__right}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: '#f8f8f8',
              padding: '10px',
              borderRadius: '10px',
            }}
          >
            <Typography variant='h5'>Sửa xe 3MP</Typography>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <RoomIcon />
              <Typography variant='p'>
                24 Võ Văn Lượng, Phường 11, Gò Vấp, TPHCM
              </Typography>
            </div>
          </div>
          <div>
            <br />
            Ngày hoạt động: 23/08/2016
            <br />
            <br />
            Đánh giá trung bình: <Rating name='disabled' value={4} disabled />
            <br />
            <br />
            Số điện thoại: 0988.123.321
            <br />
            <br />
            Hỗ trợ sửa xe: Xe đạp, xe máy, xe ô tô
            <br />
            <br />
            Hỗ trợ kéo xe về: Có
            <br />
            <br />
            Giờ mở cửa: 6:00 AM - 9:30 PM
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default GarageProfile;
