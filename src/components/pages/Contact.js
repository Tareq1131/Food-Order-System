// import React from "react";
// import Heading from "../common/Heading";
// import CommonHeading from "../common/CommonHeading";
// import { contact } from "../data/Item";

// export default function Contact() {
//   return (
//     <>
//       <Heading subtitle="Home" title="Contact" heading="Contact" />

//       <div
//         className="container-fluid contact py-6 wow bounceInUp"
//         data-wow-delay="0.1s"
//       >
//         <div className="container">
//           <div className="p-5 bg-light rounded contact-form">
//             <div className="row g-4">
//               <div className="col-12">
//                 <CommonHeading
//                   title="Get in touch"
//                   description="Contact Us For Any Queries!"
//                 />
//               </div>
//               <div className="col-md-6 col-lg-7">
//                 <p className="mb-4">
//                   The contact form is currently inactive. Get a functional and
//                   working contact form with Ajax & PHP in a few minutes. Just
//                   copy and paste the files, add a little code and you're done.
//                 </p>
//                 <form>
//                   <input
//                     type="text"
//                     className="w-100 form-control p-3 mb-4 border-primary bg-light"
//                     placeholder="Your Name"
//                   />
//                   <input
//                     type="email"
//                     className="w-100 form-control p-3 mb-4 border-primary bg-light"
//                     placeholder="Enter Your Email"
//                   />
//                   <textarea
//                     className="w-100 form-control mb-4 p-3 border-primary bg-light"
//                     rows="4"
//                     cols="10"
//                     placeholder="Your Message"
//                   ></textarea>
//                   <button
//                     className="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill"
//                     type="submit"
//                   >
//                     Submit Now
//                   </button>
//                 </form>
//               </div>
//               <div className="col-md-6 col-lg-5">
//                 <div>
//                   {contact.map((val, index) => (
//                     <div className="d-inline-flex w-100 border border-primary p-4 rounded mb-4">
//                       {val.icon}
//                       <div className="">
//                         <h4>{val.title}</h4>
//                         <p>{val.address}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // Optional: for validation schema
import Heading from "../common/Heading";
import CommonHeading from "../common/CommonHeading";
import { contact } from "../data/Item";

export default function Contact() {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string(),
    }),
    onSubmit: (values) => {
      alert(`Form submitted with data: ${JSON.stringify(values, null, 2)}`);
    },
  });

  return (
    <>
      <Heading subtitle="Home" title="Contact" heading="Contact" />
      <div
        className="container-fluid contact py-6 wow bounceInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="p-5 bg-light rounded contact-form">
            <div className="row g-4">
              <div className="col-12">
                <CommonHeading
                  title="Get in touch"
                  description="Contact Us For Any Queries!"
                />
              </div>
              <div className="col-md-6 col-lg-7">
                <p className="mb-4">
                  The contact form is currently inactive. Get a functional and
                  working contact form with Ajax & PHP in a few minutes. Just
                  copy and paste the files, add a little code and you're done.
                </p>
                <form onSubmit={formik.handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    className={`w-100 form-control p-3 mb-4 border-primary bg-light ${
                      formik.touched.name && formik.errors.name
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Your Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-danger mb-2">{formik.errors.name}</div>
                  ) : null}

                  <input
                    type="email"
                    name="email"
                    className={`w-100 form-control p-3 mb-4 border-primary bg-light ${
                      formik.touched.email && formik.errors.email
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder="Enter Your Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger mb-2">
                      {formik.errors.email}
                    </div>
                  ) : null}

                  <textarea
                    name="message"
                    className={`w-100 form-control mb-4 p-3 border-primary bg-light ${
                      formik.touched.message && formik.errors.message
                        ? "is-invalid"
                        : ""
                    }`}
                    rows="4"
                    cols="10"
                    placeholder="Your Message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  {formik.touched.message && formik.errors.message ? (
                    <div className="text-danger mb-2">
                      {formik.errors.message}
                    </div>
                  ) : null}

                  <button
                    className="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill"
                    type="submit"
                  >
                    Submit Now
                  </button>
                </form>
              </div>
              <div className="col-md-6 col-lg-5">
                <div>
                  {contact.map((val, index) => (
                    <div
                      key={index}
                      className="d-inline-flex w-100 border border-primary p-4 rounded mb-4"
                    >
                      {val.icon}
                      <div className="">
                        <h4>{val.title}</h4>
                        <p>{val.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
