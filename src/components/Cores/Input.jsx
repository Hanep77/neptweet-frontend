export default function Input({ type, name, title, error }) {
    return (
        <div className="flex flex-col mb-3">
            <label htmlFor={name}>{title}</label>
            <input type={type} id={name} name={name} placeholder={title} className="h-8 bg-zinc-800 focus:outline-none px-2 rounded" />
            <p className="text-red-500 italic text-sm">{error && error}</p>
        </div>
    )
}
