// src/components/NewsletterArea.jsx
import React, { useState } from "react";

const NewsletterArea = () => {
  // حالة البريد الإلكتروني
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // submitting / success / error

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // هنا ممكن تضيف إرسال البريد لأي API أو Mailchimp
    setTimeout(() => {
      setStatus("success");
      setEmail(""); // إعادة تعيين الحقل بعد الإرسال
    }, 1500);
  };

  return (
    <div className="newsletter-area section-space--inner">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="newsletter-wrapper text-center">
              <p className="small-text">Special Offers For Subscribers</p>
              <h3 className="title">Ten Percent Member Discount</h3>
              <p className="short-desc">
                Subscribe to our newsletters now and stay up to date with new collections,
                the latest lookbooks and exclusive offers.
              </p>

              <div className="newsletter-form">
                <form onSubmit={handleSubmit} className="mc-form" noValidate>
                  <input
                    type="email"
                    placeholder="Enter Your Email Address Here..."
                    required
                    name="EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit">SUBSCRIBE</button>
                </form>
              </div>

              {/* الرسائل */}
              <div className="mailchimp-alerts mt-3">
                {status === "submitting" && (
                  <div className="mailchimp-submitting text-info">Submitting...</div>
                )}
                {status === "success" && (
                  <div className="mailchimp-success text-success">Thank you for subscribing!</div>
                )}
                {status === "error" && (
                  <div className="mailchimp-error text-danger">Please enter a valid email.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterArea;
