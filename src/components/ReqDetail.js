import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const req = [
  {
    id: 0,
    requester: 'Nguyễn Văn A',
    assignee: 'Vu Thu Giang',
    addr: '32 Võ Văn Hát, Phước Long, Quận 9, TPHCM',
    reason: 'Bị nổ lốp xe',
    time: '12:31 PM',
    date: 'June 14, 2021',
    status: 'Đã hủy',
    price: '0đ',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6VzwmULFgVKSBebjjkA53NONhD3Pr5HxCGg&usqp=CAU',
    brand: 'Honda',
    model: 'Chaly',
    plate: '51N-23232',
  },
  {
    id: 1,
    requester: 'Trần Đức B',
    assignee: 'Tran Nhan',
    addr: '90 Khai Sáng, Phước Long, Quận 9, TPHCM',
    reason: 'Xe hết bình bất ngờ',
    time: '01:31 PM',
    date: 'June 14, 2021',
    status: 'Hoàn thành',
    price: '30,100đ',
    img: 'https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg',
    brand: 'Honda',
    model: 'Civic',
    plate: '51N-12365',
  },
  {
    id: 2,
    requester: 'Vũ Thị H',
    assignee: 'Nguyen Van Hung',
    addr: '32/17 Quang Trung, Quận Gò Vấp, TPHCM',
    reason: 'Xe hư hỏng giữa đường không rõ nguyên nhân',
    time: '08:00 AM',
    date: 'July 02, 2021',
    status: 'Đang tiến hành',
    price: 'Chưa báo giá',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjYtP0EcE6VHqU3nEzbvdTY0uwUd-iZcTTVLZdsOFGL0z3Ii_9Ra4lSrGxJ-ZjzN2HCephr_NlVY&usqp=CAU',
    brand: 'Mercedes',
    model: 'E300',
    plate: '51N-55555',
  },
  {
    id: 3,
    requester: 'Đào Thiện P',
    assignee: 'Đang chờ',
    addr: 'Cổng chính Trường đại học Nông Lâm',
    reason: 'Xe bị rơi biển số xe',
    time: '8:31 AM',
    date: 'July 02, 2021',
    status: 'Chưa tiếp nhận',
    price: 'Chưa báo giá',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopuYK4IALyeKuX44nnMoHE9bgvYxx9hYaPw&usqp=CAU',
    brand: 'Porsche',
    model: 'Paparazzi',
    plate: '51N-12312',
  },
  {
    id: 4,
    requester: 'Hà Thị T',
    assignee: 'Tran Nhan',
    addr: '61 Xuân Thủy, Thảo Điền, Quận 2, TPHCM',
    reason: 'Xe tắt máy bất ngờ',
    time: '9:31 AM',
    date: 'June 14, 2021',
    status: 'Hoàn thành',
    price: '150,000đ',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1JE1JuzHHu3b58l7tM6KBbHrNWCm_8ngzilX10LJqzzn_MdIHCruxInDv6g48RmwTpahZtgd30_E&usqp=CAU',
    brand: 'Yamaha',
    model: 'Yoyo',
    plate: '51N-90099',
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
}));
const ReqDetail = (props) => {
  const classes = useStyles();
  const str = `${req[props.id].date} - ${req[props.id].time}`;
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              aria-label='recipe'
              className={classes.avatar}
              src={req[props.id].img}
            ></Avatar>
          }
          title={req[props.id].requester}
          subheader={str}
        />
        <CardContent>
          <Typography
            variant='body1'
            color='textPrimary'
            component='p'
            style={{ lineHeight: '30px' }}
          >
            <b>Thông tin tiếp nhận sửa chữa</b>
          </Typography>
          <Typography
            variant='body2'
            color='textPrimary'
            component='p'
            style={{ lineHeight: '30px' }}
          >
            Tên thợ sửa: {req[props.id].assignee}
            <br />
            Địa chỉ tiếp nhận: {req[props.id].addr}
            <br />
            Trạng thái: {req[props.id].status}
            <br />
            Thanh toán: {req[props.id].price}
            <br />
            Nguyên nhân sửa chữa: {req[props.id].reason}
          </Typography>

          <Typography
            variant='body1'
            color='textPrimary'
            component='p'
            style={{ lineHeight: '30px', marginTop: '20px' }}
          >
            <b>Thông tin xe sửa chữa</b>
          </Typography>
          <Typography
            variant='body2'
            color='textPrimary'
            component='p'
            style={{ lineHeight: '30px' }}
          >
            Thương hiệu của xe: {req[props.id].brand}
            <br />
            Tên của xe: {req[props.id].model}
            <br />
            Biển số xe: {req[props.id].plate}
            <br />
            Nguyên nhân hư hỏng: {req[props.id].reason}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReqDetail;
