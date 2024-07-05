import BlogCard from "@/components/BlogCard";
import ImageFallback from "@/components/ImageFallback";
import MDXContent from "@/components/MDXContent";
import Social from "@/components/Social";
import config from "@/config/config.json";
import { getSinglePage } from "@/lib/contentParser";
import { slugify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { Author, Post } from "@/types";

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single?: string }[] = () => {
  const authors: Author[] = getSinglePage("business");

  const paths = authors.map((author) => ({
    single: author.slug,
  }));

  return paths;
};

const AuthorSingle = ({ params }: { params: { single: string } }) => {
  const authors: Author[] = getSinglePage("business");
  const author = authors.filter((page) => page.slug === params.single)[0];
  const { frontmatter, content } = author;
  const { title, socials, meta_title, description, image } = frontmatter;
  const { blog_folder } = config.settings;
  const posts: Post[] = getSinglePage(blog_folder);
  const postFilterByAuthor: Post[] = posts.filter(
    (post) => slugify(post.frontmatter.author) === slugify(title)
  );

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section-sm pb-0">
        <div className="container">
          <div className="row justify-center">
            <div className="text-left md:col-10 lg:col-7">
              {image && (
                <ImageFallback
                  src={image}
                  className="mx-auto mb-10 rounded"
                  height={200}
                  width={200}
                  alt={title}
                />
              )}
              <h1 className="h3 mb-6">{title}</h1>
              <div className="content">
                <MDXContent content={content} />
              </div>
              <Social source={socials} className="social-icons" />
            </div>
          </div>

          <div className="row justify-center pb-16 pt-14">
            {postFilterByAuthor.map((post, index: number) => (
              <div className="mb-12 md:col-6 lg:col-4" key={index}>
                <BlogCard data={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthorSingle;