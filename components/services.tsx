import type React from "react"
import { LayoutIcon, MonitorIcon, BarChart3Icon, PenToolIcon, GlobeIcon, PlayCircleIcon } from "lucide-react"
import { Header } from "./header"


interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 text-indigo-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

export default function ServicesSection() {
  const serviceData = [
    {
      icon: <LayoutIcon className="w-5 h-5" />,
      title: "UI/UX Design",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      icon: <MonitorIcon className="w-5 h-5" />,
      title: "Web Development",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      icon: <BarChart3Icon className="w-5 h-5" />,
      title: "Digital Marketing",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      icon: <PenToolIcon className="w-5 h-5" />,
      title: "Graphic Design",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      icon: <GlobeIcon className="w-5 h-5" />,
      title: "Web Design",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
    {
      icon: <PlayCircleIcon className="w-5 h-5" />,
      title: "Motion Design",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-Mycontainer mx-auto px-4">
      <Header title="Our Services" desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." className="text-center "/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

