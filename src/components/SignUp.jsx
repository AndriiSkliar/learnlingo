// import {useDispatch} from 'react-redux';
// import {useHistory} from 'react-router-dom';
// import { setUser } from '../redux/auth/auth.reducer';

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { UniversalForm } from "./Form";

export const SignUp = () => {
    const signInInputs = [
        { name: 'name', label: 'Name' },
        { name: 'email', label: 'Email' },
        { name: 'password', label: 'Password' },
    ];

    const handleRegisterSubmit = async ({name, email, password}) => {
        const auth = getAuth();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const newProfile = await updateProfile(userCredential.user, { displayName: name });
            console.log(newProfile);
        } catch (error) {
            console.error('Error registering user:', error);
        }
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