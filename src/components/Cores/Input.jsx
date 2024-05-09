export default function Input({ type, name, title }) {
    return (
        <div className="flex flex-col mb-3">
            <label htmlFor={name}>{title}</label>
            <input type={type} id={name} name={name} placeholder={title} className="h-8 border px-2 rounded" />
        </div>
    )
}