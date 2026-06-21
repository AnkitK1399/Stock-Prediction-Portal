import React, { useEffect } from "react"
import axiosInstance from "../../axiosInstance"

const Dashboard = () => {

    useEffect(() => {
        const fetchProtectedData = async () => {
            try{
                const response = await axiosInstance.get('/protected-view')
                console.log('success', response.data)   

            }catch(error){
                console.error('Error data', error )
            }
        }
        fetchProtectedData();
    },[])
    return(
        <>
            <h1 className="text-light container"> Welcome to dashboard</h1>
        </>
    )
}
export default Dashboard
