import { useContext, useState } from "react";
import Input from "../components/Cores/Input";
import AuthTemplate from "../components/Templates/AuthTemplate";
import { StateContext } from "../context/ContextProvider";
import axiosClient from "../axios";

export default function Login() {
    const { setCurrentUser, setUserToken } = useContext(StateContext)
    const [errors, setErrors] = useState({})

    function handleLogin(event) {
        event.preventDefault()

        axiosClient.post('/login', {
            email: event.target.email.value,
            password: event.target.password.value
        }).then(response => {
            setCurrentUser(response.data.data)
            setUserToken(response.data.token)
        }).catch(error => {
            if (error.response) {
                if (error.response.status == 422) {
                    setErrors(error.response.data.errors)
                } else if (error.response.status == 401) {
                    console.log(error)
                    setErrors({ unauthorized: error.response.data.message })
                }
            }
        })
    }

    return (
        <AuthTemplate title="Login">
            <h5 className="text-lg font-semibold text-red-500 text-center mb-3">{errors.unauthorized && errors.unauthorized}</h5>
            <form action="" onSubmit={handleLogin}>
                <Input type="email" name="email" title="Email" error={errors.email} />
                <Input type="password" name="password" title="Password" error={errors.password} />
                <button type="submit" className="bg-cyan-700 hover:bg-cyan-600 active:bg-blue-500 w-full h-8 rounded text-white mb-1">Login</button>
            </form>
        </AuthTemplate>
    )
}
