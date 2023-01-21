import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
 

export default function () {
    let handleClose = () => {
        alert("hello");
    }

    return (
      <Dialog open={false} fullWidth={true} onClose={handleClose} maxWidth="sm" scroll="paper">
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="other3" onClick={handleClose}>Disagree</Button>
          <Button color="other3" onClick={handleClose} autoFocus>Agree</Button>
        </DialogActions>
      </Dialog>
    );
}