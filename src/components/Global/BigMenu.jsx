

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const MENU_ITEMS = [
  "About",
  "Career",
  "The Experience",
  "Partners",
  "Customers",
  "Electrical services",
  "Airport lighting and Aviation Services",
  "HVAC, Fire Fighting & Mechanical supplies",
  "Control & Automation Supplies",
  "Electrical Supplies",
  "Blog & News",
  "Success Stories",
  "Social",
];

const CONTACT_INFO = {
  email: "info@evostel.com",
  phone: "+966 9200 18844",
};

export default function BigMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="bigmenu"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "40vh", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{
            width: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            backgroundColor: "#fff",
            zIndex: 50,
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem",
              borderBottom: "1px solid #ddd",
            }}
          >
            <h2 style={{ fontWeight: "bold", fontSize: "1rem" }}>Menu</h2>
            <Button size="icon-lg" variant="menu" onClick={onClose}>
              <X />
            </Button>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              padding: "1rem",
              overflowY: "auto",
              height: "calc(40vh - 64px)",
            }}
          >
            {MENU_ITEMS.map((item) => (
              <Button key={item} variant="nav" style={{ textAlign: "left" }}>
                {item}
              </Button>
            ))}

            <div style={{ marginTop: "1rem", borderTop: "1px solid #ddd", paddingTop: "0.5rem", fontSize: "0.875rem" }}>
              <p><strong>Email:</strong> {CONTACT_INFO.email}</p>
              <p><strong>Phone:</strong> {CONTACT_INFO.phone}</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
