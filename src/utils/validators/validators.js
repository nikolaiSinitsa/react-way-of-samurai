import * as Yup from "yup";

export const validateEmail = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required 1';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test( values.email )
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
};

export const validationSchemaName = Yup.object().shape( {
    name: Yup.string()
        .min( 2, "Must be longer than 2 characters" )
        .max( 30, "Must be shorter than 30 characters" )
        .required( "Required 2" )
});

export const validationSchemaMessage = Yup.object().shape( {
    message: Yup.string()
        .min( 2, "Must be longer than 2 characters" )
        .max( 30, "Must be shorter than 30 characters" )
        .required( "Required 2" ),
    postText: Yup.string()
        .min( 2, "Must be longer than 2 characters" )
        .max( 30, "Must be shorter than 30 characters" )
        .required( "Required 2" )
});
