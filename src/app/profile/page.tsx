import ImageFallback from "@/components/ImageFallback";
import MDXContent from "@/components/MDXContent";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import { RegularPage } from "@/types";


const Profile = () => {
  const data: RegularPage = getListPage("pages/profile.md");
  const { frontmatter, content } = data;
  const { title, meta_title, description, image } = frontmatter;
  const testimonial = getListPage("sections/testimonial.md");
  const callToAction = getListPage("sections/call-to-action.md");

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />

      <section className="section-sm">
        <div className="container">
          <div className="row justify-center">
            <div className="text-left md:col-10 lg:col-7">
              {image && (
                <ImageFallback
                  className="mx-auto mb-6 rounded-lg"
                  src={image}
                  width={1200}
                  height={200}
                  alt={title}
                />
              )}
              <h2
                dangerouslySetInnerHTML={markdownify(title)}
                className="h3 mb-6 text-center"
              />
              <div className="content overflow-y-scroll">
                <MDXContent content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Testimonials data={testimonial} /> */}
      {/* <CallToAction data={callToAction} /> */}

    </>
  );
};

export default Profile;
