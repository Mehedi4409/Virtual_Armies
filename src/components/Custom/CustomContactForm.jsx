import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const servicesList = [
  "Virtual Assistance",
  "Lead Generation",
  "Customer Support",
  "Social Media",
  "Admin Management",
  "Tech Support",
];

const CustomContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  // Log the form data every time it updates
  useEffect(() => {
    console.log("Form Data Updated:", formData);
  }, [formData]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full h-full max-w-3xl mx-auto space-y-9">

      {/* GRID FIELDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          placeholder="Name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <Input
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <Input
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />

        <Input
          placeholder="Company"
          value={formData.company}
          onChange={(e) => handleChange("company", e.target.value)}
        />
      </div>

      {/* SERVICE SELECT BUTTONS */}
      <div className="space-y-3">
        <p className="text-sm text-gray-600">Select Service</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 md:gap-y-4 gap-x-2">
          {servicesList.map((service) => {
            const isActive = formData.service === service;

            return (
              <Button
                key={service}
                type="button"
                size="service"
                variant={isActive ? "serviceOptionActive" : "serviceOption"}
                onClick={() => handleChange("service", service)}
              >
                {service}
              </Button>
            );
          })}
        </div>
      </div>

      {/* MESSAGE FIELD */}
      <div>
        <textarea
          placeholder="Message"
          className="w-full min-h-[120px] border rounded-lg  bg-transparent px-3 py-2 text-base"
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
        />
      </div>

      {/* SUBMIT BUTTON */}
      <div className="">
        <Button
          variant="primary"
          size="lg"
          onClick={() => console.log("Submitted:", formData)}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CustomContactForm;
