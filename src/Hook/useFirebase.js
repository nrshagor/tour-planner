import { useEffect, useState } from "react"
import initializeAuthentication from '../Firebase/firebase.init'
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            // .then(result => {
            //     console.log(result.user);
            //     setUser(result.user);
            // })
            .finally(() => setIsLoading(false))
            .catch(error => {
                setError(error.message);
            })
    }
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state change', user);
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        })
    }, [])
    return {
        isLoading,
        logout,
        user,
        error,
        signInUsingGoogle
    }

}
export default useFirebase;