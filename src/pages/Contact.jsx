import { useRef, useState, useEffect } from "react";
import { Navigate } from "react-router";

export default function Contact(){
    const fileRef = useRef()
    const [image, setImage] = useState()
    const [isAuthenticated, setIsAuthenticated] = useState()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(!!token){
            console.log('sudah login')
            setIsAuthenticated(true)
        } else {
            console.log('tidak login')
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        const file = fileRef.current.files[0]
        const reader = new FileReader()
        reader.addEventListener('load', () => {
            setImage(reader.result)
        }, false)

        if(file.type.includes('image/')) reader.readAsDataURL(file)
    }


    return(
        <>
            {!isAuthenticated ? (<Navigate to='/login'/>) : '' }

            <h1>Contact</h1>

            { !!image && (<img src={image} alt=""/>)}

            <form onSubmit={handleSubmit}>
                <input type="file" ref={fileRef}/>

                <button type="submit">Submit</button>
            </form>
        </>
        
    )
}