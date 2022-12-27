import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {validationSchemaMessage} from "../../utils/validators/validators";



export default (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.Dialogs.map(dialog => <Dialog name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElements = state.Messages.map(message => <Message message={message.message} key={message.id} dispatch={props.dispatch}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                {dialogsElements}
            </div>
            <div className={s.messagesList}>
                {messagesElements}
                <Formik
                    initialValues={{message: ""}}
                    validateOnBlur
                    // validationSchema={validationSchemaMessage}
                    onSubmit={(values,{resetForm}) => {
                        props.sendMessage(values.message);
                        resetForm()
                        }}>
                        <Form>
                            <Field name="message" type="text"/>
                            <ErrorMessage name='message' component="div"/>
                            <button type="submit">Send message</button>
                        </Form>
                </Formik>
            </div>
        </div>
    )
}