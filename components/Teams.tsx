import { Header } from "./header";

export const Teams = () => {
   const images = [
      { image: "/Team 1.png" },
      { image: "/Team Member 2.png" },
      { image: "/Team Member 3.png" },
   ];

   return (
      <div className="pt-10">
         <Header title="Our Expert Team Member" desc="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form." className="text-center"/>
         <div className=" max-w-Mycontainer mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3  ">
            {images.map((img, index) => (
               <img key={index} src={img.image} alt={`Work ${index + 1}`} className="w-full h-auto rounded-md hover:shadow-md hover:scale-105 transition-all duration-200 ease-in " />
            ))}
         </div>
      </div>
   );
};
