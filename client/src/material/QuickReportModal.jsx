import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { sendQuickReport } from '../apiFeatures.js';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Break The Silence
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Post a Quick Report
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Form onClose={handleClose}/>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Send ✈️ 
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </React.Fragment>
  );
}

const Form = function({onClose}) {
  const option = ['cybercrime', 'child abuse', 'financial fraud', 'race', 'harassment', 'cyberbullying', 'human tracking', 'stalking', 'sexual assault', 'domestic violence', 'quick'];

  const [name, setName] = React.useState('');
  const [desc, setDesc] =React.useState('');
  const [contact, setContact] = React.useState('');
  const [category, setCategory] = React.useState(option[0]);

  const submitForm = async function(e) {
    e.preventDefault();
    const res = await sendQuickReport({name, desc, contact, category});
    onClose();
    if(res.status === 'success')  console.log('successfull');
    else console.log('failed to create');
  }

    return (
        <> 
          <form action="" className='flex flex-col gap-10' onSubmit={submitForm}>
            <div className='flex gap-10'>
              <label htmlFor="name">Name:</label>
              <input type="text" placeholder='name' required className='border' value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div  className='flex gap-10'>
              <label htmlFor="desc">Desc:</label>
              <textarea name="desc" id="" cols="30" rows="10"  required placeholder="tell in berif(>200 words)" className='border' value={desc} onChange={e => setDesc(e.target.value)}></textarea>
            </div>
            <div className='flex gap-10'>
              <label htmlFor="contact">Contact:</label>
              <input type="text" name='contact'  required placeholder='contact number' className='border' value={contact} onChange={e => setContact(e.target.value)}/>
            </div>
            <div  className='flex gap-10'>
              <label htmlFor="category">category</label>
              <select name="category" id="" required value={category} onChange={e=>setCategory(e.target.value)}>
                {option.map((el, i) => <option key={i} className='lowercase' value={el}>{el}</option>)}
              </select>
            </div>
            <button type='submit' className='rounded text-[var(--heading-trival)] bg-[var(--backGround)]'>submit</button>
          </form>
        </>
    )
}