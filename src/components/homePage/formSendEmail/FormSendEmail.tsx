import { useState } from 'react';
import { CircleCheckBigIcon, CircleX, Mail } from 'lucide-react';
import { Input } from './Input';
import { cn } from '../../../../libs/utils';
import { homePage } from '../../../locales/home';



type FormData = {
    name: string
    email: string
    message: string
}
type FormErrors = Partial<FormData>;

export const FormSendEmail = () => {
    const {contactSetion:{form}} = homePage
    const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
    const WEB3FORM_URL = import.meta.env.VITE_WEB3FORM_URL

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });
    
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
    
        if (formData.name.length < 2) {
            newErrors.name = 'El nombre debe tener al menos 2 caracteres';
        }
    
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            newErrors.email = 'Email inválido';
        }
    
        if (formData.message.length < 10) {
            newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const response = await fetch( WEB3FORM_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    from_name: formData.name,
                    subject: `Nuevo mensaje de contacto de ${formData.name}`,
                    message: formData.message,
                    reply_to: formData.email
                })
            });
            const data = await response.json();
            if (data.success) {
                setSubmitStatus({
                    type: 'success',
                    message: '¡Mensaje enviado correctamente!'
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Error al enviar el mensaje');
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setSubmitStatus({
            type: 'error',
            message: 'Error al enviar el mensaje. Inténtalo de nuevo.'
            });
        } finally {
            setIsSubmitting(false);
        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name as keyof FormData]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    return (
        <div className="w-full max-w-md mx-auto rounded-lg shadow-lg overflow-hidden border-2 border-main">
            <div className="p-6">
                <div className="flex items-center gap-2 mb-6">
                    <Mail className="h-5 w-5 text-blue-500" />
                    <h2 className="text-xl text-blue-500 font-bold">{form.title}</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    
                        <Input 
                            name='name'
                            value={formData.name} 
                            handleChange={handleChange} 
                            type={'text'} 
                            placeholder={form.placeholder.name} 
                            error={errors.name}   
                        />
                        <Input 
                            name='email'
                            value={formData.email} 
                            handleChange={handleChange} 
                            type={'email'} 
                            placeholder={form.placeholder.email} 
                            error={errors.email}
                        />
                    <div>
                        <textarea
                            name="message"
                            placeholder={form.placeholder.msg}
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className={cn(
                                "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none bg-transparent",
                                errors.message ? "border-red-500" : "border-main"
                            )}
                        />
                        {errors.message && (
                            <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                        )}
                    </div>
                    <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
                    {submitStatus.type && (
                        <div 
                            className={cn(
                                "p-3 rounded-md text-center flex items-center gap-2 justify-center",
                                submitStatus.type === 'success' ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                            )}
                        >   
                        {submitStatus.type === 'success' ? <CircleCheckBigIcon className='h-5 w-5'/> :  <CircleX className='h-5 w-5' />}
                            {submitStatus.message}
                        </div>
                    )}
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
