import { Header } from "./header";

export const Portfolio = () => {
   const images = [
      { image: "/work (2).png" },
      { image: "/work (1).png" },
      { image: "/work (3).png" },
      { image: "/work (4).png" },
      { image: "/work (1).png" },
      { image: "/work (3).png" },
      { image: "/blog (1).png" },
      { image: "/blog (2).png" },
   ];

   return (
      <div className="pt-10">
         <Header title="Our Work Portfolio" desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." className="text-center"/>
         <div className=" max-w-Mycontainer mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4  ">
            {images.map((img, index) => (
               <img key={index} src={img.image} alt={`Work ${index + 1}`} className="w-full h-auto rounded-md hover:shadow-md hover:scale-105 transition-all duration-200 ease-in " />
            ))}
         </div>
      </div>
   );
};
