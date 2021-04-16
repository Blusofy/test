import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionMethods from '../../redux/actions/content';

const { handleClickClearMessage } = actionMethods;

export default function SimpleSnackbar() {
    const { msg } = useSelector((state) => state).content;
    const dispatch = useDispatch();
    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={!!msg}
                autoHideDuration={6000}
                onClose={() => dispatch(handleClickClearMessage())}
                message={msg}
                action={
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="secondary"
                        onClick={() => dispatch(handleClickClearMessage())}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                }
            />
        </div>
    );
}
