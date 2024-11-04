import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Input } from './Input';
import { cn } from '../../../../libs/utils';


export const FormSendEmail = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsSubmitting(true);

        console.log('Form submitted:', formData);

        setTimeout(() => {
            setIsSubmitting(false);
            setFormData({ name: '', email: '', message: '' });
        }, 1000);

    }
    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="w-full max-w-md mx-auto rounded-lg shadow-lg overflow-hidden border-2 border-main">
            <div className="p-6">
                <div className="flex items-center gap-2 mb-6">
                    <Mail className="h-5 w-5 text-blue-500" />
                    <h2 className="text-xl text-blue-500 font-bold">Enviar Mensaje</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    
                        <Input 
                            name='name'
                            value={formData.name} 
                            handleChange={handleChange} 
                            type={'text'} 
                            placeholder={'Nombre'} 
                            required    
                        />

                        <Input 
                            name='email'
                            value={formData.email} 
                            handleChange={handleChange} 
                            type={'email'} 
                            placeholder={'Email'} 
                            required
                        />
                    <div>
                        <textarea
                            name="message"
                            placeholder="Mensaje"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full px-4 py-2 border border-main rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none bg-transparent"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                            "w-full py-2 px-4 rounded-md text-white font-medium transition-colors",
                            isSubmitting 
                                ? "bg-blue-400 cursor-not-allowed" 
                                : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
                        )}
                    >
                        {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                    </button>
                </form>
            </div>
        </div>
    )
}
