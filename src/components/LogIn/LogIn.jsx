import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useState } from "react";

const LogIn = () => {

    const [user, setUser] = useState([])

    const auth = getAuth(app);

    const provider = new GoogleAuthProvider()



    const handleLogIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser)
            })
            .error(error => {
                console.log(error)
            })
        console.log('button clicked')
    }

    const handleSignOut = () => {
        const auth = getAuth(app)
        signOut(auth)
            .then(() => {
                setUser(null)
            })
            .error(() => {
                console.log(error)
            })
        console.log('sign out button clicked')
    }

    return (
        <div>
            <button onClick={handleLogIn}>Login</button>
            <button onClick={handleSignOut}>Sign out</button>
            <h2>user: {user?.displayName}</h2>
            <p>email: {user?.email}</p>
            <img src={user?.photoURL} alt="" />
        </div>
    );
};

export default LogIn;