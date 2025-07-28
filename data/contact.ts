import { LucideIcon, Mail, Phone, MapPin } from "lucide-react";

export interface ContactItem {
  icon: LucideIcon;
  title: string;
  value: string;
  link: string | null;
}

const contactInfo: ContactItem[] = [
  {
    icon: Mail,
    title: "Email",
    value: "dhruvpateldhruvpatel01669@gmail.com",
    link: "mailto:dhruvpateldhruvpatel01669@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 (999) 836-8799",
    link: "tel:+919998368799",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Ahmedabad, Gujarat, India",
    link: null,
  },
];

export default contactInfo;
