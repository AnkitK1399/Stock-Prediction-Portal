import { useState } from "react";
import axios from "axios";

const Register = () => {
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[errors, setError] = useState("");
    const[successMessage, setSuccessMessage] = useState("");
    const[isSubmitting, setIsSubmitting] = useState(false);
    const handleRegistration = async (e) => {
        e.preventDefault();
        const userData = { username, email, password };
        setIsSubmitting(true);
        try{
            const response = await axios.post("http://localhost:8000/api/register/", userData)
            console.log("response date --->",response.data);
            console.log("Registration successful");
            setError(""); // Clear any previous errors on successful registration
            setSuccessMessage("Registration successful!");
        }catch(error){
            setError(error.response.data);
            console.error('Registration error', error.response.data)
        }finally{
            setIsSubmitting(false);
        }
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 bg-light p-5 rounded">
                        <h3 className="text-dark text-center mb-4">Create an Account</h3>
                        <form onSubmit={handleRegistration}>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}  />
                                <small>{errors.username && <div className="text-danger">{errors.username}</div>}</small>
                            </div>
                            
                            <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <div className="mb-3">
                                <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <small>{errors.password && <div className="text-danger">{errors.password}</div>}</small>
                            </div>
                            {successMessage && <div className="text-success mb-3">{successMessage}</div>}
                            {isSubmitting ? (
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary w-25"> Please wait </button>
                                </div>
                            ):(
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary w-25"> Register </button>
                                </div>
                            )}
                        
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Register;