import Avatar from "./avatar";
import CoverImage from "./cover-image";
import CoverVideo from "./cover-video";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  coverVideo?: string;
  date: string;
  author: Author;
  relatedPosts?: string[];
};

export function PostHeader({ title, coverImage, coverVideo, date, author,  relatedPosts }: Props) {
 

  return (
    <>
      <PostTitle>{title}</PostTitle>
      {/* <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div> */}
      {/* <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div> */}
      <div className="mb-8 md:mb-16">
        {coverVideo ? (
          <CoverVideo videoSrc={coverVideo} />
        ) : (
          <CoverImage title={title} src={coverImage} />
        )}
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        {/* <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div> */}
        {relatedPosts && relatedPosts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-1xl font-bold mb-3">Posts Relacionados</h2>
          <ul style={{listStyle: "disc", marginLeft: "20px", textDecoration: "underline"}}>
            {relatedPosts.map((slug) => (
              <li className="mb-2">
                <Link href={`/posts/${slug}`}>
                  {slug.replace(/-/g, " ").replace(/^\w/, c => c.toUpperCase())}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </>
  );
}
