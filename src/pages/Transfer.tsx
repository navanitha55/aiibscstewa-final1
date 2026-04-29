import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBanner from "@/components/PageBanner";
import ServiceBlocks from "@/components/ServiceBlocks";
import BackgroundPattern from "@/components/BackgroundPattern";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Eye, EyeOff, User, Mail, Phone, Building, MapPin, Briefcase, Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const departments = [
  "State Bank of India", "Punjab National Bank", "Bank of Baroda",
  "Canara Bank", "Union Bank of India", "Bank of India", "Indian Bank",
  "Central Bank of India", "Indian Overseas Bank", "UCO Bank",
  "LIC of India", "New India Assurance", "Oriental Insurance",
  "United India Insurance", "National Insurance Company"
];

const designations = [
  "Clerk", "Officer Scale I", "Officer Scale II", "Officer Scale III",
  "Manager", "Senior Manager", "Chief Manager", "Assistant General Manager",
  "Deputy General Manager", "General Manager", "Development Officer",
  "Administrative Officer", "Assistant"
];

const Transfer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    district: "",
    state: "",
    role: "",
    department: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.designation) newErrors.designation = "Please select a designation";
    if (!formData.state) newErrors.state = "Please select a state";
    if (!formData.department) newErrors.department = "Please select a department";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Transfer request submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        designation: "",
        district: "",
        state: "",
        role: "",
        department: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      toast.error("Please fill all required fields correctly");
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      designation: "",
      district: "",
      state: "",
      role: "",
      department: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageBanner title="Transfer" subtitle="All India Indian Bank SC/ST Employees' Welfare Association" />
        <ServiceBlocks />

        <BackgroundPattern className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 md:p-12 shadow-elevated border border-border"
            >
              <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        background: "#f5f7fa",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          background: "#ffffff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>
          Transfer Request Form 2026
        </h2>

        <p style={{ marginBottom: "10px", lineHeight: "1.6" }}>
          The “Transfer Request Form 2026 – AIIBSCSTEWA” is now available online for submission.
        </p>

        <p style={{ marginBottom: "10px", lineHeight: "1.6" }}>
          All members are hereby instructed to submit their transfer requests through this form.
          Requests submitted through any other mode will not be considered under any circumstances.
        </p>

        <p style={{ marginBottom: "10px", lineHeight: "1.6" }}>
          Members requiring assistance may contact their respective Zonal or State Office Bearers.
        </p>

        <p style={{ marginBottom: "20px", fontWeight: "bold" }}>
          Access the form below:
        </p>

        {/* BUTTON */}
        <button
          onClick={() => window.open("https://tally.so/r/VL8v8l", "_blank")}
          style={{
            padding: "12px 30px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Apply Now
        </button>
      </div>
    </div>
            </motion.div>
          </div>
        </BackgroundPattern>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Transfer;
