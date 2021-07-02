import * as React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import StarsIcon from '@material-ui/icons/Stars';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ReqDetail from '../../components/ReqDetail';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '99%',
    borderRadius: 10,
    backgroundColor: theme.palette.background.paper,
    marginTop: 50,
  },
  inline: {
    display: 'inline',
  },
  status: {
    display: 'flex',
    alignItems: 'center',
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
const Dashboard = () => {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(0);

  const [open, setOpen] = React.useState(false);

  const handleOpen = (id) => {
    setOpen(true);
    setSelected(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
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
              Chi tiết yêu cầu
            </h1>
            <ReqDetail id={selected} />
          </div>
        </Fade>
      </Modal>
      <Typography variant='h4' align='center' style={{ marginTop: 100 }}>
        Quản lý yêu cầu sửa chữa
      </Typography>
      <List className={classes.root}>
        <ListItem
          alignItems='flex-start'
          button
          onClick={() => {
            handleOpen(0);
          }}
        >
          <ListItemAvatar>
            <Avatar
              alt='Remy Sharp'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6VzwmULFgVKSBebjjkA53NONhD3Pr5HxCGg&usqp=CAU'
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                Nguyễn Văn A
                <Typography
                  component='span'
                  variant='body2'
                  className={classes.inline}
                  color='textSecondary'
                >
                  {' '}
                  — June 14, 2021 — 12:31PM
                </Typography>
              </React.Fragment>
            }
            // primary='Nguyễn Văn A  — June 14, 2021 — 12:31AM'
            secondary={
              <React.Fragment>
                <Typography
                  component='span'
                  variant='body2'
                  className={classes.inline}
                  color='textPrimary'
                >
                  Thợ sửa: <b>Vu Thu Giang</b>
                </Typography>
                {' — 32 Võ Văn Hát, Phước Long, Quận 9, TPHCM'}
              </React.Fragment>
            }
          />
          <ListItemSecondaryAction className={classes.status}>
            <Typography
              component='span'
              color='textSecondary'
              style={{ marginRight: 1 }}
            >
              Đã hủy
            </Typography>
            <IconButton edge='end' aria-label='cancel'>
              <CancelIcon color='secondary' fontSize='small' />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem
          alignItems='flex-start'
          button
          onClick={() => {
            handleOpen(1);
          }}
        >
          <ListItemAvatar>
            <Avatar
              alt='Travis Howard'
              src='https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg'
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                Trần Đức B
                <Typography
                  component='span'
                  variant='body2'
                  className={classes.inline}
                  color='textSecondary'
                >
                  {' '}
                  — June 14, 2021 — 01:31PM
                </Typography>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  component='span'
                  variant='body2'
                  className={classes.inline}
                  color='textPrimary'
                >
                  Thợ sửa: <b>Tran Nhan</b>
                </Typography>
                {' — 90 Khai Sáng, Phước Long, Quận 9, TPHCM'}
              </React.Fragment>
            }
          />
          <ListItemSecondaryAction className={classes.status}>
            <Rating
              name='disabled'
              value={3}
              disabled
              style={{ marginRight: 200 }}
            />

            <Typography
              component='span'
              color='textSecondary'
              style={{ marginRight: 1 }}
            >
              Hoàn thành
            </Typography>
            <IconButton edge='end' aria-label='completed'>
              <CheckCircleIcon style={{ color: '#4caf50' }} fontSize='small' />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem
          alignItems='flex-start'
          button
          onClick={() => {
            handleOpen(2);
          }}
        >
          <ListItemAvatar>
            <Avatar
              alt='Cindy Baker'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjYtP0EcE6VHqU3nEzbvdTY0uwUd-iZcTTVLZdsOFGL0z3Ii_9Ra4lSrGxJ-ZjzN2HCephr_NlVY&usqp=CAU'
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                Vũ Thị H
                <Typography
                  component='span'
                  variant='body2'
                  className={classes.inline}
                  color='textSecondary'
                >
                  {' '}
                  — July 02, 2021 — 08:00 AM
                </Typography>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  component='span'
                  variant='body2'
                  className={classes.inline}
                  color='textPrimary'
                >
                  Thợ sửa: <b>Nguyen Van Hung</b>
                </Typography>
                {' — 32/17 Quang Trung, Quận Gò Vấp, TPHCM'}
              </React.Fragment>
            }
          />
          <ListItemSecondaryAction className={classes.status}>
            <Typography
              component='span'
              color='textSecondary'
              style={{ marginRight: 1 }}
            >
              Đang tiến hành
            </Typography>
            <IconButton edge='end' aria-label='cancel'>
              <WatchLaterIcon style={{ color: '#ffcd00' }} fontSize='small' />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem
          alignItems='flex-start'
          button
          onClick={() => {
            handleOpen(3);
          }}
        >
          <ListItemAvatar>
            <Avatar
              alt='Juli Baker'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopuYK4IALyeKuX44nnMoHE9bgvYxx9hYaPw&usqp=CAU'
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                Đào Thiện P
                <Typography
                  component='span'
                  variant='body2'
                  className={classes.inline}
                  color='textSecondary'
                >
                  {' '}
                  — July 02, 2021 — 08:31AM
                </Typography>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  component='span'
                  variant='body2'
                  className={classes.inline}
                  color='textPrimary'
                >
                  Thợ sửa: <b>Đang chờ</b>
                </Typography>
                {' — Cổng chính Trường đại học Nông Lâm'}
              </React.Fragment>
            }
          />
          <ListItemSecondaryAction className={classes.status}>
            <Typography
              component='span'
              color='textSecondary'
              style={{ marginRight: 1 }}
            >
              Chưa tiếp nhận
            </Typography>
            <IconButton edge='end' aria-label='cancel'>
              <StarsIcon style={{ color: '#f36f0a' }} fontSize='small' />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant='inset' component='li' />
        <ListItem
          alignItems='flex-start'
          button
          onClick={() => {
            handleOpen(4);
          }}
        >
          <ListItemAvatar>
            <Avatar
              alt='Travis Howard'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1JE1JuzHHu3b58l7tM6KBbHrNWCm_8ngzilX10LJqzzn_MdIHCruxInDv6g48RmwTpahZtgd30_E&usqp=CAU'
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                Hà Thị T
                <Typography
                  component='span'
                  variant='body2'
                  className={classes.inline}
                  color='textSecondary'
                >
                  {' '}
                  — June 14, 2021 — 09:31AM
                </Typography>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  component='span'
                  variant='body2'
                  className={classes.inline}
                  color='textPrimary'
                >
                  Thợ sửa: <b>Tran Nhan</b>
                </Typography>
                {' — 61 Xuân Thủy, Thảo Điền, Quận 2, TPHCM'}
              </React.Fragment>
            }
          />
          <ListItemSecondaryAction className={classes.status}>
            <Rating
              name='disabled'
              value={5}
              disabled
              style={{ marginRight: 200 }}
            />
            <Typography
              component='span'
              color='textSecondary'
              style={{ marginRight: 1 }}
            >
              Hoàn thành
            </Typography>
            <IconButton edge='end' aria-label='completed'>
              <CheckCircleIcon style={{ color: '#4caf50' }} fontSize='small' />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
};
export default Dashboard;
