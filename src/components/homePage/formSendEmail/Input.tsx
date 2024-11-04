

interface Props {
    value: string
    handleChange: (e: {
        target: {
            name: string;
            value: string;
        };
    }) => void
    required?: boolean
    type: "text" | "password" | "email"
    placeholder: string
    name: string
}
export const Input = ({value, handleChange, required = false, type, placeholder, name}:Props) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required={required}
            className="w-full px-4 py-2 border-2 border-main bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        />
    )
}
