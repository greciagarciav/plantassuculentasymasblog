import Image from "next/image";

type Props = {
  title: string;
  coverImage: string;
  excerpt: string;
  link: string;
};

export function Ebook({
  title,
  coverImage,
  excerpt,
  link
}: Props) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-y-32 mb-32">
        <div>
          <div className="mb-4 md:mb-0 text-lg flex justify-center">
             <Image
                  src={coverImage}
                  alt={`Cover Image for ${title}`}
                  className="hover:shadow-lg transition-shadow duration-200"
                  width={300}
                  height={400}
                />
          </div>
        </div>
        <div>
          <h3 className="mb-8 text-6xl font-bold tracking-tighter leading-tight">            
            {title}            
          </h3>
          <p className="text-lg leading-relaxed mb-10">{excerpt}</p>
          <a
            href={link}
            target="_blank"
            className="bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-5 mt-5 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
          >
            COMPRAR EBOOK
          </a>
        </div>
      </div>
    </section>
  );
}
