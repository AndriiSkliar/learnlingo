// import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UniversalForm } from "./Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../redux/auth/auth.reducer';


export const Login = () => {
    const dispatch = useDispatch();
    // const { push } = useHistory();
    const loginInputs = [
        { name: 'email', label: 'Email' },
        { name: 'password', label: 'Password' },
    ];
    
    const handleLoginSubmit = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(console.log())
            .catch(console.log())
        // .then(({user}) => {
        //         console.log(user);
        //         dispatch(setUser({
        //             email: user.email,
        //             id: user.uid,
        //             token: user.accessToken,
        //         }));
        //         push('/');
        //     })
        //     .catch(() => alert('Invalid user!'))
    };

    return (
        <UniversalForm
            title="Log In"
            text="Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
            inputs={loginInputs}
            handleUserSubmit={handleLoginSubmit}
            button="Log In"
        />
    )
}



    // const handleLogin = (email, password) => {
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