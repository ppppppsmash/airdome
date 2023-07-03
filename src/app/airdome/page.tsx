import ImageFallback from "@/components/ImageFallback";
import { ModelViewer } from "@/components/ModelViewer";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import { Button, Feature } from "@/types";
import { FaCheck } from "react-icons/fa/index.js";
import { RegularPage } from "@/types";
import MDXContent from "@/components/MDXContent";

const AirDome = () => {
  const airdomePage: RegularPage = getListPage("pages/airdome.md");
  const { frontmatter, content } = airdomePage;
  const { title, meta_title, description } = frontmatter;



  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
      />
      <section className="section-sm">
        <div className="container">
          <div className="row justify-center">
            <div className="text-left md:col-10 lg:col-7">
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

export default AirDome;