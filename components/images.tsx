export const Images = () => {
   const images = [
      { image: "/work (2).png" },
      { image: "/work (1).png" },
      { image: "/work (3).png" },
      { image: "/work (4).png" },
      { image: "/work (2).png" },
      { image: "/work (3).png" },
      { image: "/blog (1).png" },
      { image: "/blog (2).png" },
   ];

   return (
      <div className="">
         <div className=" max-w-Mycontainer mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4  ">
            {images.map((img, index) => (
               <img key={index} src={img.image} alt={`Work ${index + 1}`} className="w-full h-auto rounded-md hover:shadow-md hover:scale-105 transition-all duration-200 ease-in " />
            ))}
         </div>
      </div>
   );
};
