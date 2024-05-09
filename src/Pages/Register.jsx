import Input from "../components/Cores/Input";
import AuthTemplate from "../components/Templates/AuthTemplate";

export default function Register() {
    return (
        <AuthTemplate title="Register">
            <form action="">
                <Input type="text" name="name" title="Name" />
                <Input type="email" name="email" title="Email" />
                <Input type="password" name="password" title="Password" />
                <Input type="password" name="password_confirmation" title="Confirm Password" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 w-full h-8 rounded text-white mb-1">Register</button>
            </form>
        </AuthTemplate>
    )
}