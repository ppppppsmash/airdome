"use client"
import dynamic from 'next/dynamic'
import ImageFallback from "@/components/ImageFallback";
import { ModelViewer} from "@/components/ModelViewer";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import { Button, Feature } from "@/types";
import { FaCheck } from "react-icons/fa/index.js";
import { Canvas } from '@react-three/fiber';
//const Duck = dynamic(() => import('@/components/ModelViewer').then((mod) => mod.Duck), { ssr: false })
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

const Home = () => {
  // const homepage = getListPage("_index.md");
  // const testimonial = getListPage("sections/testimonial.md");
  // const callToAction = getListPage("sections/call-to-action.md");
  // const { frontmatter } = homepage;
  // const {
  //   banner,
  //   features,
  // }: {
  //   banner: { title: string; image: string; content?: string; button?: Button };
  //   features: Feature[];
  // } = frontmatter;

  return (
    <>
      <section className="sm:section pt-14">
        <div className="container">
          <div className="row justify-center">
            <ModelViewer/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
