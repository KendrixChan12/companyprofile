import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us for more information",
  description: "This is Contact Page for Bolu Jadul Bali",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Contact us for more information about Bolu Jadul Bali"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
