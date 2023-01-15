import Image from "next/image";
import { FC } from "react";
import { IBlogItem } from "../../model";

const BlogItem: FC<IBlogItem> = ({ id, title, url }) => {
  return (
    <div>
      <div>{id}.</div>
      <div>
        <div>{title}</div>
        <div>
          <Image
            alt={`image-${id}`}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"
            width="200"
            height="200"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
