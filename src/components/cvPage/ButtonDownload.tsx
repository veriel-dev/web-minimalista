import { Download } from "lucide-react"

function ButtonDownload() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="fixed top-4 right-4 print:hidden">
            <button
                onClick={handlePrint}
                className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors shadow-lg"
            >
                <Download className="w-5 h-5" />
                Descargar CV
            </button>
        </div>
    )
}

export default ButtonDownload