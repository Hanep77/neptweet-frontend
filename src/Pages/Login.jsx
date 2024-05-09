import Input from "../components/Cores/Input";
import AuthTemplate from "../components/Templates/AuthTemplate";

export default function Login() {
    return (
        <AuthTemplate title="Login">
            <form action="">
                <Input type="email" name="email" title="Email" />
                <Input type="password" name="password" title="Password" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 w-full h-8 rounded text-white mb-1">Login</button>
            </form>
        </AuthTemplate>
    )
}