import { FC } from "react";

interface Heder{
   title: string,
   desc?: string,
   className?:string
}

export const Header:FC<Heder> = ({title, desc,className}) => {
  return<div className={` ${className} mb-12`}>
  <h2 className="text-3xl font-bold mb-4">{title}</h2>
  <p className="text-gray-600 max-w-2xl mx-auto">
    {desc}
  </p>
</div>
};


