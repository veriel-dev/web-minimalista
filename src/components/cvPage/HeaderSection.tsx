import { Mail, MapPin, Phone } from 'lucide-react'


const HeaderSection = () => {
    const text = {
        name: "Víctor Manuel Ordiales García",
        job: "Desarrollador Full Stack - Mid/Senior", 
        street: "Calle Sanguino Número 18 Bloque A 1ºB",
        phone: "685394859",
        email: "vmordiales@gmail.com"
    }
    return (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-12 print:bg-blue-600">
            <div className="max-w-3xl">
                <h1 className="text-4xl font-bold mb-2">{text.name}</h1>
                <h2 className="text-xl font-medium mb-6">{text.job}</h2>
                <div className="flex flex-wrap gap-4 text-sm flex-col">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{text.street}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{text.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>{text.email}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection