import { Link, useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBanner from "@/components/PageBanner";
import BackgroundPattern from "@/components/BackgroundPattern";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Download, ExternalLink } from "lucide-react";
import { circulars } from "@/data/circularsData";
import { motion } from "framer-motion";

const CircularDetail = () => {
  const { id } = useParams();
  const circular = circulars.find((c) => c.id === id);

  if (!circular) return <Navigate to="/circular" replace />;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageBanner title="Circular Details" subtitle={circular.number} />

        <BackgroundPattern className="py-10">
          <div className="container mx-auto px-4 max-w-5xl">
            <Link to="/circular">
              <Button variant="outline" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Circulars
              </Button>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card rounded-xl shadow-elevated border border-border overflow-hidden"
            >
              <div className="bg-gradient-to-r from-primary to-blue-700 p-6 text-primary-foreground">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-lg p-3">
                    <FileText className="w-7 h-7" />
                  </div>
                  <div>
                    <h1 className="font-heading font-bold text-xl sm:text-2xl">{circular.title}</h1>
                    <p className="text-sm opacity-90 mt-1">{circular.number}</p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-heading font-semibold bg-muted/40 w-48">
                        Circular No.
                      </td>
                      <td className="px-6 py-4 text-foreground">{circular.number}</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-heading font-semibold bg-muted/40">Title</td>
                      <td className="px-6 py-4 text-foreground">{circular.title}</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="px-6 py-4 font-heading font-semibold bg-muted/40">Date</td>
                      <td className="px-6 py-4 text-foreground">{circular.date}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-heading font-semibold bg-muted/40 align-top">
                        Description
                      </td>
                      <td className="px-6 py-4 text-foreground leading-relaxed">
                        {circular.description}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-6 bg-muted/20 border-t border-border flex flex-wrap gap-3">
                <a href={circular.pdfUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-rose-600 to-rose-700 text-white">
                    <ExternalLink className="w-4 h-4 mr-2" /> Open PDF
                  </Button>
                </a>
                <a href={circular.pdfUrl} download>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" /> Download
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Inline PDF preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-8 bg-card rounded-xl shadow-card border border-border overflow-hidden"
            >
              <div className="px-5 py-3 border-b border-border bg-muted/40">
                <h2 className="font-heading font-semibold text-foreground">Preview</h2>
              </div>
              <div className="w-full h-[70vh] bg-muted">
                <iframe
                  src={circular.pdfUrl}
                  title={circular.title}
                  className="w-full h-full"
                />
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

export default CircularDetail;
