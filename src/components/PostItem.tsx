import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <>
    <Link href={"/posts/" + post.slug}>
      <a>
        <Date date={parseISO(post.date)} />
        <h2>{post.title}</h2>
        
        <style jsx>
          {`
            a {
              color: #26d0eb;
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
              color: #26eba9;
            }
          `}
        </style>
      </a>
    </Link>
    <p>{post.tags.map((tag)=> (
                <a href ={'posts/tags/' + tag} key={tag}>
                   {'#'}{tag}{' '}
                   <style jsx>
                    {`
                    a {
                     color: #26d0eb;
                     } 
                    `}
                    </style>
                </a>
              ))}</p>
    </> 
  );
}
