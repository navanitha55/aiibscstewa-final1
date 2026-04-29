export interface Circular {
  id: string;
  number: string;
  title: string;
  date: string; // DD/MM/YYYY
  month: string; // 01-12
  year: string;
  description: string;
  pdfUrl: string;
}

export const circulars: Circular[] = [
  {
    id: "gbm-notice-en",
    number: "AIIBSCSTEWA/2026/04",
    title: "Notice for General Body Meeting (GBM) - English",
    date: "15/04/2026",
    month: "04",
    year: "2026",
    description:
      "Official notice convening the General Body Meeting of the All India Indian Bank SC/ST Employees' Welfare Association. Members are requested to attend without fail.",
    pdfUrl: "/circulars/Notice_GBM.pdf",
  },
  {
    id: "gbm-notice-hi",
    number: "AIIBSCSTEWA/2026/03",
    title: "सूचना - General Body Meeting (Hindi Notice)",
    date: "15/04/2026",
    month: "04",
    year: "2026",
    description:
      "अखिल भारतीय इंडियन बैंक अनुसूचित जाति/जनजाति कर्मचारी कल्याण संघ की आम सभा बैठक हेतु आधिकारिक सूचना।",
    pdfUrl: "/circulars/GBM_Notice.pdf",
  },
  {
    id: "gbm-circular-hi",
    number: "AIIBSCSTEWA/2026/02",
    title: "General Body Meeting Circular (Hindi)",
    date: "10/04/2026",
    month: "04",
    year: "2026",
    description:
      "हिंदी में आम सभा बैठक का परिपत्र — सभी सदस्यों के लिए महत्वपूर्ण निर्देश एवं एजेंडा शामिल है।",
    pdfUrl: "/circulars/Hindi_Cir_GBM.pdf",
  },
  {
    id: "gbm-main",
    number: "AIIBSCSTEWA/2026/01",
    title: "General Body Meeting - Agenda & Details",
    date: "05/04/2026",
    month: "04",
    year: "2026",
    description:
      "Complete agenda, venue, and schedule details for the upcoming General Body Meeting of the association.",
    pdfUrl: "/circulars/General_Body_Meeting.pdf",
  },
];

export const months = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

export const years = ["2026", "2025", "2024", "2023"];
