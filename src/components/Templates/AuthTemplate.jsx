import { Link } from "react-router-dom";

export default function AuthTemplate({ title, children }) {
    return (
        <div className="w-96 bg-white border p-5 rounded">
            <h2 className="text-2xl font-semibold text-center mb-3">{title}</h2>
            {children}
            <p className="text-slate-700">{title == "Login" ? "doesn't have account yet? " : "already have an account?"} <Link className="text-blue-500" to={title == "Login" ? "/register" : "/login"}>{title == "Login" ? "register" : "login"}</Link></p>
        </div>
    )
}