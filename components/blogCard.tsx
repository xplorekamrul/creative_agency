import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, UserIcon } from "lucide-react"

interface BlogCardProps {
  image: string
  title: string
  excerpt: string
  author: string
  date: string
  slug: string
}

export default function BlogCard({
  image = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Blog%201-a5sTr1JpXyjNpij6OLgSMNKFPtTPjt.png",
  title = "Business Plans That Fit Your Best Blog",
  excerpt = "There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.",
  author = "Admin",
  date = "07/11/2021",
  slug = "#",
}: BlogCardProps) {
  return (
    <div className="max-w-sm overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      </div>
      <div className="p-5">
        <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <UserIcon size={16} />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <CalendarIcon size={16} />
            <span>{date}</span>
          </div>
        </div>
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{title}</h2>
        <p className="mb-4 text-gray-600">{excerpt}</p>
        <Link href={slug} className="text-indigo-600 hover:text-indigo-800 hover:underline">
          Learn More
        </Link>
      </div>
    </div>
  )
}

