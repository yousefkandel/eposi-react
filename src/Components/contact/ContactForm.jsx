import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // هنا تقدر تربطه بـ API
    console.log(formData);

    setStatus("Your message has been sent successfully!"); // الرسالة بالإنجليزي
    setFormData({ name: "", email: "", message: "" });

    // اختياري: ارجاع السكرول على الفورم
    const formTop = document.querySelector(".contact-form-content");
    formTop.scrollIntoView({ behavior: "smooth" });

    // اختفاء الرسالة بعد 5 ثواني
    setTimeout(() => {
      setStatus("");
    }, 5000);
  };

  return (
    <div className="page-content-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-wrapper">
              <div className="page-content-wrapper">

                <div className="row">
                  {/* Contact Info */}
                  <div className="col-lg-5 offset-lg-1 col-md-12 order-1 order-lg-2">
                    <div className="contact-page-side-content">
                      <h3 className="contact-page-title">Contact Us</h3>
                      <p className="contact-page-message">
                        Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
                      </p>

                      <div className="single-contact-block">
                        <h4><i className="fa fa-fax"></i> Address</h4>
                        <p>123 Main Street, Anytown, CA 12345 – USA</p>
                      </div>

                      <div className="single-contact-block">
                        <h4><i className="fa fa-phone"></i> Phone</h4>
                        <p>Mobile: (08) 123 456 789</p>
                        <p>Hotline: 1009 678 456</p>
                      </div>

                      <div className="single-contact-block">
                        <h4><i className="fa fa-envelope-o"></i> Email</h4>
                        <p>yourmail@domain.com</p>
                        <p>support@hastech.company</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                    <div className="contact-form-content">
                      <h3 className="contact-page-title">Tell Us Your Message</h3>

                      <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label>Your Name <span className="required">*</span></label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label>Your Email <span className="required">*</span></label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label>Your Message</label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-group mb-0">
                          <button type="submit" className="contact-button">
                            Send
                          </button>
                        </div>
                      </form>

                      {status && <p className="form-messege">{status}</p>}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
