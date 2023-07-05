"use client";
import { AlertDialog } from "@/components/Modal";
import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import { useState } from "react";

const Contact = () => {
  // const data: RegularPage = getListPage("pages/contact.md");
  // const { frontmatter } = data;
  // const { title, description, meta_title, image } = frontmatter;
  // const { contact_form_action } = config.params;

  const [isSend, setIsSend] = useState<boolean>(false);

  const [form, setForm] = useState({
    name: "",
    company: "",
    mail: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsSend(true);
  
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/contact`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      cache: "no-store",
      body: JSON.stringify({
        name: form.name,
        company: form.company,
        mail: form.mail,
        message: form.message,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Response succeeded!");
        } else {
          console.log(`Error: Status Code ${res.status}`);
        }
      })
      .catch((e) => {
        console.log(`Error: ${e}`);
      });
  };

  return (
    <>
      {/* <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      /> */}
      {/* <PageHeader title={title} /> */}
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="mx-auto md:col-10 lg:col-6">

              {!isSend &&
              <form method="POST">
                <div className="mb-6">
                  <label htmlFor="name" className="form-label">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={(e) => {
                      const val = e.currentTarget.value;
                      setForm((props) => ({
                        ...props,
                        name: val !== null ? val : "",
                      }));
                    }}
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
                    onChange={(e) => {
                      const val = e.currentTarget.value;
                      setForm((props) => ({
                        ...props,
                        company: val !== null ? val : "",
                      }));
                    }}
                    value={form.company}
                    className="form-input"
                    placeholder="ヒマラヤ合同会社"
                    type="text"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="mail" className="form-label">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="mail"
                    onChange={(e) => {
                      const val = e.currentTarget.value;
                      setForm((props) => ({
                        ...props,
                        mail: val !== null ? val : "",
                      }));
                    }}
                    value={form.mail}
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
                    id="message"
                    onChange={(e) => {
                      const val = e.currentTarget.value;
                      setForm((props) => ({
                        ...props,
                        message: val !== null ? val : "",
                      }));
                    }}
                    value={form.message}
                    className="form-input"
                    placeholder="入力してください"
                    rows={8}
                    required
                  ></textarea>
                </div>
                <AlertDialog
                  onClick={handleSubmit}
                />
              </form>
              }

              {isSend && 
                <p className="text-center">ご送信いただき、ありがとうございます！</p>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
