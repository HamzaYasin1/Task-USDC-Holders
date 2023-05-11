import { ErrorMessage } from '../messages/ErrorMessage';
import { toast } from 'react-toastify';

// Function to handle error messages
export function errorMessage(err) {
    let errorMessage = ErrorMessage.unexpectedError;
    try {
        if (err.message === 'Network Error') {
            errorMessage = ErrorMessage.networkError;
        } else if (err?.response?.data?.data?.error?.message) {
            errorMessage = err.response.data.data.error.message;
        }
        return errorMessage;
    } catch (e) {
        return errorMessage;
    }
}

// Function to display failure toast message
export const toastMessageFailure = (message) => {
    toast.error(`${message}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
    });
};

// Loading spinner component
export const loader = (message) => {
    return (
        <>
            <p>{message || 'Loading'}</p>
            <img
                alt="loading..."
                style={{ height: '22px', width: '22px' }}
                src="/assets/images/spinner3.gif"
            ></img>
        </>
    );
};
