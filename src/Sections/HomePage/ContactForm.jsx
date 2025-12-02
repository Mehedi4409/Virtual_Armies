import CustomContactForm from '@/components/Custom/CustomContactForm';
import Wrapper from '@/components/Global/Wrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight, Dot } from 'lucide-react';
import React from 'react';

const ContactForm = () => {
  const contactInfo = [
    { label: "Email", value: "info@virtualarmies.com" },
    { label: "Phone", value: "(516) 216-9054" },
  ];

  const officeInfo = [
    { label: "Location", value: "Riverside Building, County Hall, Westminster Bridge Rd, London SE1 7PB, United Kingdom" },
    { label: "Office Hours", value: "Monday - Friday, 8:00 AM - 6:00 PM" },
  ];

  return (
    <Wrapper className="mt-48 space-y-12">

      {/* ------ HEADER ------ */}
      <div className="grid grid-cols-3 gap-4 items-start">
        <div className="flex gap-2 items-center">
          <Dot />
          <h2>Contact Us</h2>
        </div>

        <div className="space-y-4">
          <h1 className="text-5xl font-semibold">Do you have any Question?</h1>
          <p>Please fill out the form or contact us using the contact details.</p>
        </div>

        <div className="flex justify-end">
          <Button variant="primary" size="lg">
            More News <ArrowRight />
          </Button>
        </div>
      </div>

      {/* ------ MAIN CONTENT ------ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12">

        {/* LEFT SIDE INFO BLOCK */}
        <div className="bg-slate-100 p-12 rounded-lg flex flex-col space-y-10">

          <InfoSection title="Contact Information" data={contactInfo} />
          <InfoSection title="Main Office" data={officeInfo} />

          <Button className="mt-auto" variant="primary" size="lg">
            Contact Us
          </Button>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="col-span-2 bg-slate-100 rounded-lg p-12">
          <CustomContactForm />
        </div>

      </div>
    </Wrapper>
  );
};

export default ContactForm;


/* -------------------- REUSABLE INFO SECTION -------------------- */

const InfoSection = ({ title, data }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">{title}</h2>
    {data.map((item, index) => (
      <div key={index} className="space-y-1">
        <p className="text-sm text-gray-500">{item.label}</p>
        <h3 className="text-lg font-medium">{item.value}</h3>
      </div>
    ))}
  </div>
);
