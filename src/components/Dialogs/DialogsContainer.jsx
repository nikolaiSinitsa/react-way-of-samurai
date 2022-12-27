import React from 'react';
import s from './Dialogs.module.css';
import {sendMessageActionCreater} from '../../redux/dialogs-reducer';
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newPostText) => {
            dispatch(sendMessageActionCreater(newPostText));
        },
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);