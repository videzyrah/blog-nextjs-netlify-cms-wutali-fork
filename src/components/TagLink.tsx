import Link from "next/link";
import { TagContent } from "../lib/tags";

type Props = {
  tag: TagContent;
};
export default function Tag({ tag }: Props) {
  return (
    <Link href={"/posts/tags/[[...slug]]"} as={`/posts/tags/${tag.slug}`}>
      <a>{"#" + tag.name}
      <style jsx>
          {`
           a {
          color: #26d0eb;
          } 
          `}
      </style>
      </a>
      
    </Link>
  );
}
