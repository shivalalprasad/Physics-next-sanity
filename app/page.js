// import Image from "next/image";
export const metadata = {
  name: "google-site-verification",
  content:"emhlqdbv3W9xP9-4GOGvH9iAwu6BzeYsy6tenMFsgqE",
};


export default function Home() {
  // fill=true // {true} | {false}
  return (
    <div className="main-content">
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-8 mx-auto">
          <div className="flex flex-wrap w-full mb-8">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Department of Physics
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-900 font-bold">
              we support online Education for the next thought process
              generations{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-8 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1 ">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 overflow-hidden">
                <img alt="gallery"
                className="w-full object-cover h-full object-center block transform h-64 bg-blue-400 w-80 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center"
                src="https://live.staticflickr.com/65535/52876753517_5cd6f38a75_b.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-full overflow-hidden">
                {/* <Image
                  className="w-full object-cover h-full object-center block transform h-64 bg-blue-400 w-80 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center"
                  src="/images/home1.jpg"
                  alt="Gallery"
                 fill
                  // objectFit="contain"
                /> */}
                <img alt="gallery"
                className="w-full h-full object-cover object-center block transform h-64 bg-blue-400 w-80 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center"
                src="https://live.staticflickr.com/65535/52877780368_c3526459d5_b.jpg"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2 overflow-hidden">
              <div className="md:p-2 p-1 w-full">
                {/* <Image
                  className="w-full object-cover h-full object-center block transform h-64 bg-blue-400 w-80 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center"
                  src="/images/home3.jpg"
                  alt="Gallery"
                 fill
                  // objectFit="contain"
                /> */}
                <img alt="gallery"
                className="w-full h-full object-cover object-center block transform h-64 bg-blue-400 w-80 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center"
                src="https://live.staticflickr.com/65535/52876753287_9a187593ee_b.jpg"/>
              </div>
              <div className="md:p-2 p-1 overflow-hidden">
                {/* <Image
                  className="w-full object-cover h-full object-center block transform h-64 bg-blue-400 w-80 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center"
                  src="/images/home4.jpg"
                  alt="Gallery"
                fill
                  // objectFit="contain"
                /> */}
                <img alt="gallery"
                className="w-full object-cover h-full object-center block transform h-64 bg-blue-400 w-80 transition duration-500 hover:scale-125 hover:bg-blue-600 flex justify-center items-center"
                src="https://live.staticflickr.com/65535/52877335421_31e8480c3e_b.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
