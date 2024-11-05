
// const EducationSection = () => {
//     const {educationSection} = homePage
//     return (
//         <Section>
//             <h2 className="text-3xl font-bold mb-10 flex items-center gap-2 text-blue-500">
//                 <GraduationCap className="h-8 w-8" />
//                 {educationSection.title}
//             </h2>
//             <div className="space-y-8">
//                 {educationSection.titles.map((edu, index) => (
//                     <Card key={index} className="rounded-lg p-6 border-2 hover:border-blue-500 transition-colors">
//                         <h3 className="text-xl font-semibold text-blue-600">{edu.degree}</h3>
//                         <p className="text-gray-200 font-medium">{edu.institution}</p>
//                         <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
//                         <p className="text-gray-500">
//                             {edu.description}
//                         </p>
//                     </Card>
//                 ))}
//             </div>
//         </Section>
//     )
// }
// export default EducationSection