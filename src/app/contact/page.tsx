import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";

const Contact = async () => {
  const data: RegularPage = getListPage("pages/contact.md");
  const { frontmatter } = data;
  const { title, description, meta_title, image } = frontmatter;
  const { contact_form_action } = config.params;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="mx-auto md:col-10 lg:col-6">
              <form action={contact_form_action} method="POST">
                <div className="mb-6">
                  <label htmlFor="name" className="form-label">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    className="form-input"
                    placeholder="ヒマラヤ 太郎"
                    type="text"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="company" className="form-label">
                    会社
                  </label>
                  <input
                    id="company"
                    className="form-input"
                    placeholder="ヒマラヤ 太郎"
                    type="text"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="mail" className="form-label">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="mail"
                    className="form-input"
                    placeholder="taro@gmail.com"
                    type="email"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="form-label">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    className="form-input"
                    placeholder="入力してください"
                    id="message"
                    rows={8}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  送信
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
