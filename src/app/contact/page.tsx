"use client";
import { AlertDialog } from "@/components/Modal";
import { motion } from "framer-motion";
import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import { useState } from "react";
import FormAlert from "@/components/FormAlert";
import { inputCheck, validateEmailFormat } from "@/lib/utils/formValidation";
import { FaLessThan } from "react-icons/fa";

const Contact = () => {
  // const data: RegularPage = getListPage("pages/contact.md");
  // const { frontmatter } = data;
  // const { title, description, meta_title, image } = frontmatter;
  // const { contact_form_action } = config.params;

  const [isSend, setIsSend] = useState<boolean>(false);
  const [errorFlg, setErrorFlg] = useState<boolean>(false);

  const [form, setForm] = useState({
    name: "",
    company: "",
    mail: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    if(!form.name || !form.mail || !form.message || validateEmailFormat(form.mail)) {
      setErrorFlg(true);
      setIsSend(false);
      return
    } else {
      setErrorFlg(false);
      setIsSend(true);
    }
    e.preventDefault();

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      mail: value,
    }));
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
                    姓名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="ヒマラヤ 太郎"
                    type="text"
                    required
                  />
                  {errorFlg && !form.name && (
                    <p className="text-red-400 mt-2">
                      <span className="text-red-500 pr-1">*</span>
                      {inputCheck(form.name)}
                    </p>
                  )}
                </div>
                <div className="mb-6">
                  <label htmlFor="company" className="form-label">
                    会社信息
                  </label>
                  <input
                    id="company"
                    onChange={handleInputChange}
                    value={form.company}
                    className="form-input"
                    placeholder="ヒマラヤ合同会社"
                    type="text"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="mail" className="form-label">
                    邮件 <span className="text-red-500">*</span>
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
                    placeholder="Himalaya.taro@gmail.com"
                    type="email"
                    required
                  />
                  {errorFlg && !form.mail && (
                  <p className="text-red-400 mt-2">
                    <span className="text-red-500 pr-1">*</span>
                    {inputCheck(form.mail)}
                  </p>
                  )}
                  {errorFlg && !validateEmailFormat(form.mail) && (
                  <p className="text-red-400 mt-2">
                    <span className="text-red-500 pr-1">*</span>
                    请输入有效的邮件格式.
                  </p>
                  )}
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="form-label">
                    咨询内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    onChange={handleInputChange}
                    value={form.message}
                    className="form-input"
                    placeholder="请输入咨询内容."
                    rows={8}
                    required
                  ></textarea>
                  {errorFlg && !form.message && (
                    <p className="text-red-400">
                      <span className="text-red-500 pr-1">*</span>
                      {inputCheck(form.message)}
                    </p>
                  )}
                </div>
                <AlertDialog
                  onClick={handleSubmit}
                />
              </form>
              }

              {isSend && 
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                >
                  <h4 className="text-center font-bold text-lg mt-6 mb-8">感谢您的关注✨</h4>
                  <p className="text-justify mb-6">
                  非常感谢您与我们的联系。<br />
                  我们已经收到您的询问内容，将在两个工作日内与您联系。<br />
                  如果您有紧急事项，也可随时致电咨询。<br />
                  电话号码：050-6865-6848<br />
                  再次感谢您的来信，我们期待与您进一步合作
                  </p>

                  <div className="text-center mb-6">
                    <a
                      className="btn btn-primary"
                      href="/"
                    >
                      回到首页
                    </a>
                  </div>
                  
                </motion.div>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
