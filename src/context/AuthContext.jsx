import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [session, setSession] = useState(undefined);
    const [email, setEmail] = useState(session.user?.email || '??');

    // sign up
    const signupNewUser = async (email, password) => {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })

        if (error) {
            console.error('There was a problem signing up: ', error)
            return { success: false, error }
        }

        return { success: true, data }
    }

    // sign out
    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("There was an error; ", error)
        }
    }

    // sign in
    const signInUser = async ({ email, password }) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })

            if (error) {
                console.error("Signin error occurred: ", error)
                return {
                    success: false,
                    error: error.message
                }
            }

            console.log("Sign in success: ", data)
            return { success: true, data }


        }
        catch (error) {
            console.error("An error occurred: ", error)
        }
    }

    // get session
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        })
    }, []);

    // change display name
    const changeDisplayName = async (newName) => {
        try {
            const { data, error } = await supabase.auth.updateUser({
                data: { display_name: newName }
            });

            if (error) {
                console.error("Error updating display name:", error.message);
            } else {
                console.log("Display name updated:", data);
            }
        } catch (error) {
            console.error("Unexpected error:", error);
        }
    };


    return (
        <AuthContext.Provider value={{ session, signupNewUser, signOut, signInUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}