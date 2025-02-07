import { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { login } from '../endpoints/api';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handelLogin = async () => {
        const user = await login(username, password);
        if (user) {
            localStorage.setItem('user', JSON.stringify(user)); // ✅ Save user in local storage
            navigate('/Banner'); // ✅ Redirect to home page (Banner)
        } else {
            alert('Invalid username or password');
        }
    };
const handleNavigate =() => {
  navigate('/register'); // Redirect to registration page (RegistrationForm)
}
    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: '400px', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
                <h2 className="text-center mb-4">Login</h2>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Enter password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </Form.Group>
                    <Button variant="success" onClick={handelLogin} className="w-100">Login</Button>
                    <a className='text-dark' onClick={handleNavigate}>Don't have an account? Signup</a>
                </Form>
            </Card>
        </Container>
    );
};

export default LoginForm;
