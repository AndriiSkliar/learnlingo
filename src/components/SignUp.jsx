// import {useDispatch} from 'react-redux';
// import {useHistory} from 'react-router-dom';
// import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
// import {Form} from './Form';
// import { setUser } from '../redux/auth/auth.reducer';

import { UniversalForm } from "./Form";

export const SignUp = () => {
    // const dispatch = useDispatch();
    // const {push} = useHistory();

    // const handleRegister = (email, password) => {
    //     const auth = getAuth();
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(({user}) => {
    //             console.log(user);
    //             dispatch(setUser({
    //                 email: user.email,
    //                 id: user.uid,
    //                 token: user.accessToken,
    //             }));
    //             push('/');
    //         })
    //         .catch(console.error)
    // }
    const signInInputs = [
        { name: 'name', label: 'Name' },
        { name: 'email', label: 'Email' },
        { name: 'password', label: 'Password' },
    ];

    const handleRegisterSubmit = values => {
        console.log(values);
    };

    return (
        <UniversalForm
            title="Registration"
            text="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
            inputs={signInInputs}
            handleUserSubmit={handleRegisterSubmit}
            button="Sign Up"
        />
    )
}
