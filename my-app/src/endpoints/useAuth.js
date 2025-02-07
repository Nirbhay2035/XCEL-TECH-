import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const BASE_URL = 'http://127.0.0.1:8000/api/';

    // Check if user is authenticated
    const getAuthenticatedUser = async () => {
        try {
            const response = await axios.get(`${BASE_URL}user/`, { withCredentials: true });
            setUser(response.data);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    // Register User
    const registerUser = async (username, email, password, confirmPassword) => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post(`${BASE_URL}register/`, {
                username,
                email,
                password,
            });

            alert("User registered successfully!");
            navigate('/login'); // Redirect to login after registration
        } catch (error) {
            alert("Error registering user");
        }
    };

    // Login User
    const loginUser = async (username, password) => {
        try {
            const response = await axios.post(`${BASE_URL}login/`, {
                username,
                password,
            });

            setUser(response.data.user);
            localStorage.setItem('token', response.data.token);
            navigate('/'); // Redirect to home page after login
        } catch (error) {
            alert("Incorrect username or password");
        }
    };

    // Logout User
    const logoutUser = () => {
        setUser(null);
        localStorage.removeItem('token');
        navigate('/login');
    };

    useEffect(() => {
        getAuthenticatedUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, loginUser, logoutUser, registerUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
