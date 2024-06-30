import { useState } from "react";
import axiosClient from "../axios";
import Input from "../components/Cores/Input";
import AuthTemplate from "../components/Templates/AuthTemplate";
import router from "../router";

export default function Register() {
    const [errors, setErrors] = useState({})

    function handleRegister(event) {
        event.preventDefault()

        axiosClient.post('/register', {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
            password_confirmation: event.target.password_confirmation.value,
        }).then(response => {
            if (response.status == 201) {
                router.navigate('/login')
            }
        }).catch(error => {
            if (error.response && error.response.status == 422) {
                setErrors(error.response.data.errors)
            }
        })
    }

    return (
        <AuthTemplate title="Register">
            <form action="" onSubmit={handleRegister}>
                <Input type="text" name="name" title="Name" error={errors.name} />
                <Input type="email" name="email" title="Email" error={errors.email} />
                <Input type="password" name="password" title="Password" error={errors.password} />
                <Input type="password" name="password_confirmation" title="Confirm Password" />
                <button type="submit" className="bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500 w-full h-8 rounded text-white mb-1">Register</button>
            </form>
        </AuthTemplate>
    )
}
