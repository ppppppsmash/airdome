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

      {/* <Testimonials data={testimonial} /> */}
      {/* <CallToAction data={callToAction} /> */}

      <section className="section-sm">
        <div className="container">
          <div className="row justify-center">
            <div className="text-left md:col-10 lg:col-7">
              <h2
                dangerouslySetInnerHTML={markdownify(title)}
                className="h3 mb-6 text-center"
              />
              <div className="content">
                <MDXContent content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Profile;
