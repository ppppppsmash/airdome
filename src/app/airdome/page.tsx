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
import { Photos } from "@/components/Photos";

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
      <section className="section-sm bg-[url('/images/grid.svg')]">
        <div className="container">
          <h2>Air Dome紹介</h2>
          <h4 className="mt-4">原理</h4>
          <p className="mt-8">空気支持構造建築、または気膜建築は、特殊な建築膜材を建築の外殻とし、完全に密閉された建築内部に空気圧を提供するスマートな運転制御システムを備えています。これにより、建築全体が常に外部環境に対して正圧を維持し、建築本体を内外の圧力差によって支持する建築構造システムです。</p>
        </div>
        <Photos />
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