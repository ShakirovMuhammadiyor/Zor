import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


export default function SubscribeSnackbar({ state, closeSnackbar }) {
    let IndicatorStates = {
        "done": ["success", "#9ccc65", "Success message"],
        "error": ["error", "", "Internal Server Error"]
    }

    let getIndicator = (type) => {
        let currentState = (!IndicatorStates[type] ? IndicatorStates["error"] : IndicatorStates[type]);

        return (
            <Snackbar open autoHideDuration={6000} onClose={closeSnackbar}>
                <Alert onClose={closeSnackbar} severity={currentState[0]} sx={{ backgroundColor: currentState[1], '& .MuiAlert-message': {mt: "auto", mb: "auto"}}}>{currentState[2]}</Alert>
            </Snackbar>
        );
    }
    
    return getIndicator(state);
}