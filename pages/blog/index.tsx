import { FC, ReactElement, ReactNode } from "react";
import BlogItem from "../../src/components/blog/BlogItem";
import { BlogLayout } from "../../src/layout/BlogLayout";
import { IBlogItem } from "../../src/model";

interface IBlogType {
  blogItems: IBlogItem[];
}

const Blog: FC<IBlogType> = ({ blogItems = [] }) => {
  return (
    <div>
      {blogItems.slice(0, 50).map((item) => (
        <BlogItem key={`blog-item-index-${item.id}`} {...item} />
      ))}
    </div>
  );
};

export default Blog;

Blog.pageLayout = (page: ReactElement) => {
  return <BlogLayout>{page}</BlogLayout>;
};

export async function getStaticProps() {
  const blogData = await fetch("https://jsonplaceholder.typicode.com/photos");
  const res = await blogData.json();

  return {
    props: {
      blogItems: res,
    },
  };
}
