import { Github, Globe, LinkedinIcon, Mail, MapPin, Phone } from 'lucide-react'
import { cvPage } from '../../data/pages/cv'


const HeaderSection = () => {
    const { header } = cvPage
    return (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-12 print:bg-blue-600">
            <div className="max-w-3xl">
                <h1 className="text-4xl font-bold mb-2">{header.name}</h1>
                <h2 className="text-xl font-medium mb-6">{header.job}</h2>
                <div className="flex flex-wrap gap-4 text-sm flex-col">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{header.street}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{header.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <a href="mailto:{header.email}">{header.email}</a>
                    </div>
                    <div className='flex items-center gap-2'>
                        <LinkedinIcon className="w-4 h-4" />
                        <a href={header.linkedin} target='_blank' rel='noreferrer'>{header.linkedin}</a>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Github className="w-4 h-4" />
                        <a href={header.gitHub} target='_blank' rel='noreferrer'>{header.gitHub}</a>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Globe className="w-4 h-4" />
                        <a href={header.web} target='_blank' rel='noreferrer'>{header.web}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection