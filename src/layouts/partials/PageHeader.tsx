import Breadcrumbs from "@/components/Breadcrumbs";
import { humanize } from "@/lib/utils/textConverter";

const PageHeader = ({ title }: { title: string }) => {
  return (
    <section>
      <div className="container text-center">
        <div className="bg-[url('/images/business.png')] bg-[5px 10px] rounded-2xl
        from-body to-theme-light px-8 py-14 dark:from-darkmode-body
        dark:to-darkmode-theme-light bg-cover
        ">
          <h1 className="dark:text-gray-800">{humanize(title)}</h1>
          {/* <Breadcrumbs className="mt-6" /> */}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
