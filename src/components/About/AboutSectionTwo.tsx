import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about.jpg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Bolu Jadul Bali
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
Traditional Balinese cake, known as Bolu Jadul Bali, is a cherished delicacy that embodies the rich cultural heritage and culinary traditions of Bali. This delightful cake, often made using simple yet high-quality ingredients, reflects the island's love for sweet and savory flavors. Bolu Jadul Bali is not just a treat for the taste buds but also a nostalgic reminder of Bali's past, often evoking memories of family gatherings and festive celebrations. Its unique taste and texture, influenced by local ingredients and traditional baking methods, make it a beloved dessert among locals and visitors alike. Whether enjoyed with a cup of Balinese coffee or as part of a festive spread, Bolu Jadul Bali continues to be a symbol of Bali's timeless culinary charm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
