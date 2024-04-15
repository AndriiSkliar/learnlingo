import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {Form, UniversalForm} from './Form';
import { setUser } from '../redux/auth/auth.reducer';

export const Login = () => {
    // const dispatch = useDispatch();
    // const {push} = useHistory();
    
    const loginInputs = [
        { name: 'email', type: 'email', label: 'Email' },
        { name: 'password', type: 'password', label: 'Password' },
    ];

    const handleLoginSubmit = (values) => {
        console.log(values);
    };

    // const handleLogin = (email, password) => {
    //     const auth = getAuth();
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then(({user}) => {
    //             console.log(user);
    //             dispatch(setUser({
    //                 email: user.email,
    //                 id: user.uid,
    //                 token: user.accessToken,
    //             }));
    //             push('/');
    //         })
    //         .catch(() => alert('Invalid user!'))
    // }

    return (
        <UniversalForm
            title="Login"
            text="Please enter your credentials"
            inputs={loginInputs}
            onSubmit={handleLoginSubmit}
        />
    )
}
