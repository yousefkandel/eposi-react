import React from 'react'
import NewsletterArea from '../Components/layout/NewsletterArea'
import FooterArea from '../Components/layout/FooterArea'
import Navbar from '../Components/layout/Navbar';
import Breadcrumb from '../Components/layout/Breadcrumb';
import ContactForm from '../Components/contact/ContactForm';

function ContactPage() {
    const breadcrumbLinks = [
      { name: "Home", path: "/" },
      { name: "Contact", active: true }
    ];
  
  return (
<>
    <Navbar/>
      <Breadcrumb title="Contact" links={breadcrumbLinks} />
            <ContactForm />


 <NewsletterArea/>
      <FooterArea/>

</>

)
}

export default ContactPage