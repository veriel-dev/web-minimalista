import { Briefcase, GraduationCap } from "lucide-react"


interface Props {
    elements: {
        title: string;
        jobs: {
            item: string;
            company: string;
            expertise: string[]
        }[];
        isEducation: boolean
    },

}
const TimeLineComponent = ({ elements }: Props) => {
    return (
        <section className="mb-12">
            <div className="flex items-center gap-2 mb-6 border-b-2 border-blue-400 text-blue-600">
                {
                    !elements.isEducation && (<Briefcase className="w-5 h-5 text-blue-600" />)
                }
                {
                    elements.isEducation && (<GraduationCap className="w-5 h-5 text-blue-600" />)
                }

                <h2 className="text-2xl font-bold ">{elements.title}</h2>
            </div>
            <div className="space-y-8">
                {
                    elements.jobs.map((element, index) => (
                        <div className="relative pl-8 border-l-2 border-blue-400" key={index}>
                            <div className="absolute w-4 h-4 bg-white border-2 border-blue-600 rounded-full -left-[9px] top-0"></div>
                            <div>
                                <h3 className="text-xl font-semibold text-blue-800 mb-2">{element.item}</h3>
                                <p className="text-gray-600 mb-2">{element.company}</p>
                                {/* Item List */}
                                <ul className="mt-4 space-y-2 list-disc text-gray-700">
                                    {
                                        element.expertise.map((item, index) => (
                                            <li key={index} className="ml-8 list-item">
                                                {item}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default TimeLineComponent