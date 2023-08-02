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
          <h2>气膜介绍</h2>
          <h4 className="mt-4">原理</h4>
          <p className="mt-8">气膜建筑也称为空气支撑结构建筑，是以特殊的建筑膜材为建筑外壳，并配备一套智能化
          的运行控制系统为完全密闭的建筑内部提供空气压力，使整体建筑内部始终保持对外部环
          境的正压，从而靠内外部压力差把建筑主体支撑起来的一种建筑结构系统。</p>
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