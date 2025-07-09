import {
  Truck,
  Shield,
  Clock,
  Award,
  Users,
  FileText,
  Lock,
} from "lucide-react";

export const services = [
  {
    icon: Truck,
    title: "On-Site Shredding",
    description:
      "Watch your documents get destroyed at your location with our mobile shredding trucks",
    features: [
      "Real-time destruction",
      "Certificate of destruction",
      "HIPAA compliant",
    ],
  },
  {
    icon: Shield,
    title: "Off-Site Shredding",
    description:
      "Secure pickup and destruction at our certified facility with full chain of custody",
    features: ["Locked containers", "GPS tracking", "Video surveillance"],
  },
  {
    icon: Clock,
    title: "Scheduled Service",
    description:
      "Regular pickup schedules to keep your business compliant and organized",
    features: [
      "Weekly/Monthly pickup",
      "Automatic billing",
      "Account management",
    ],
  },
];

export const offers = [
  {
    icon: Award,
    title: "NAID AAA Certified",
    description: "Highest level of security certification in the industry",
  },
  {
    icon: Lock,
    title: "100% Secure Process",
    description: "Chain of custody documentation and video surveillance",
  },
  {
    icon: Users,
    title: "Trusted by 500+ Businesses",
    description: "From small offices to Fortune 500 companies",
  },
  {
    icon: FileText,
    title: "Compliance Guaranteed",
    description: "HIPAA, FACTA, SOX, and GLBA compliant destruction",
  },
];
