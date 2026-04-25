import {useState,useContext} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = () => {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[isSubmitting, setIsSubmitting] = useState(false);
    const[errors, setErrors] = useState("");
    const{isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const userData = { username, password };
        setIsSubmitting(true);
        try{
            const response = await axios.post("http://localhost:8000/api/token/", userData)
            localStorage.setItem("access_token", response.data.access);
            localStorage.setItem("refresh_token", response.data.refresh);
            console.log("Login successful");
            setIsLoggedIn(true);
            navigate("/");
        }catch(error){
            
            console.error('Login error')
            setErrors("Invalid username or password");
        }finally{
            setIsSubmitting(false);
        }
    }
    return (
         <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 bg-light p-5 rounded">
                        <h3 className="text-dark text-center mb-4">Log in to our portal</h3>
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}  />
                            </div>
                            
                            
                            <div className="mb-3">
                                <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            {errors && <div className="text-danger mb-3">{errors}</div>}
                            {isSubmitting ? (
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary w-25" disabled>Loggin in... </button>
                                </div>
                            ):(
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary w-25">Login </button>
                                </div>
                            )}
                        
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}   
export default Login;