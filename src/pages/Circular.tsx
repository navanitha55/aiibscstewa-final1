import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBanner from "@/components/PageBanner";
import ServiceBlocks from "@/components/ServiceBlocks";
import BackgroundPattern from "@/components/BackgroundPattern";
import { motion } from "framer-motion";
import { Calendar, Eye, Search, FileText, Info, Eye as EyeIcon, BookOpen, Users, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { circulars, months, years } from "@/data/circularsData";

const tabs = [
  { label: "About", icon: Info, color: "from-rose-600 to-rose-500" },
  { label: "Vision Mission & Value", icon: EyeIcon, color: "from-orange-600 to-amber-500" },
  { label: "Current Year Circulars", icon: FileText, color: "from-amber-500 to-yellow-500" },
  { label: "Leaders", icon: Users, color: "from-blue-600 to-cyan-500" },
  { label: "Magazines", icon: BookOpen, color: "from-rose-600 to-pink-500" },
];

const Circular = () => {
  const [month, setMonth] = useState<string>("all");
  const [year, setYear] = useState<string>("all");
  const [number, setNumber] = useState("");
  const [query, setQuery] = useState({ month: "all", year: "all", number: "" });

  const filtered = useMemo(() => {
    return circulars.filter((c) => {
      if (query.month !== "all" && c.month !== query.month) return false;
      if (query.year !== "all" && c.year !== query.year) return false;
      if (query.number && !c.number.toLowerCase().includes(query.number.toLowerCase()))
        return false;
      return true;
    });
  }, [query]);

  const recent = [...circulars].slice(0, 5);

  const handleSearch = () => setQuery({ month, year, number });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageBanner title="Circulars" subtitle="All India Indian Bank SC/ST Employees' Welfare Association" />
        <ServiceBlocks />

        {/* Colored gradient tabs */}
        <section className="bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 py-4">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.label}
                    className={`bg-gradient-to-r ${tab.color} text-white rounded-lg px-3 py-3 flex items-center gap-2 shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300`}
                  >
                    <span className="bg-white/20 rounded-full p-1.5 flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-left line-clamp-2">
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <BackgroundPattern className="py-10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* LEFT: Title + filters + table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="lg:col-span-2"
              >
                <div className="flex items-center gap-3 mb-6 border-l-4 border-primary pl-3">
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-primary tracking-wide">
                    CIRCULARS
                  </h2>
                </div>

                {/* Filters */}
                <div className="bg-card rounded-xl p-4 shadow-card border border-border mb-6">
                  <h3 className="font-heading font-semibold text-foreground mb-3">List of Circulars</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <Select value={month} onValueChange={setMonth}>
                      <SelectTrigger>
                        <SelectValue placeholder="--Select Month--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Months</SelectItem>
                        {months.map((m) => (
                          <SelectItem key={m.value} value={m.value}>
                            {m.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select value={year} onValueChange={setYear}>
                      <SelectTrigger>
                        <SelectValue placeholder="--Select Year--" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Years</SelectItem>
                        {years.map((y) => (
                          <SelectItem key={y} value={y}>
                            {y}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Input
                      placeholder="Circular number"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />

                    <Button
                      onClick={handleSearch}
                      className="bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white"
                    >
                      <Search className="w-4 h-4 mr-1" /> Search
                    </Button>
                  </div>
                </div>

                {/* Table */}
                <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
                        <tr>
                          <th className="text-left px-4 py-3 font-heading font-semibold">CIRCULAR NO.</th>
                          <th className="text-left px-4 py-3 font-heading font-semibold">TITLE</th>
                          <th className="text-left px-4 py-3 font-heading font-semibold">DATE</th>
                          <th className="text-center px-4 py-3 font-heading font-semibold">VIEW</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filtered.length === 0 && (
                          <tr>
                            <td colSpan={4} className="text-center py-8 text-muted-foreground">
                              No circulars found.
                            </td>
                          </tr>
                        )}
                        {filtered.map((c, idx) => (
                          <tr
                            key={c.id}
                            className={`border-b border-border hover:bg-muted/50 transition-colors ${
                              idx % 2 === 0 ? "bg-background" : "bg-muted/20"
                            }`}
                          >
                            <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">
                              {c.number}
                            </td>
                            <td className="px-4 py-3 text-foreground">{c.title}</td>
                            <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                              {c.date}
                            </td>
                            <td className="px-4 py-3 text-center">
                              <Link to={`/circular/${c.id}`}>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                                >
                                  <Eye className="w-4 h-4" />
                                </Button>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT: Recent circulars */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 border-l-4 border-rose-600 pl-3 mb-2">
                  <Newspaper className="w-5 h-5 text-rose-600" />
                  <h3 className="font-heading font-bold text-xl text-foreground">Recent</h3>
                </div>

                {recent.map((c, index) => {
                  const colors = [
                    "from-orange-500 to-amber-500",
                    "from-rose-500 to-pink-500",
                    "from-cyan-500 to-blue-500",
                    "from-purple-500 to-violet-500",
                    "from-emerald-500 to-teal-500",
                  ];
                  return (
                    <Link key={c.id} to={`/circular/${c.id}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08 }}
                        whileHover={{ scale: 1.02 }}
                        className={`bg-gradient-to-r ${colors[index % colors.length]} text-white rounded-xl p-4 shadow-card hover:shadow-elevated cursor-pointer mb-3`}
                      >
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-lg leading-none">{index + 1}.</span>
                          <div className="flex-1">
                            <h4 className="font-heading font-semibold text-sm leading-snug line-clamp-2">
                              {c.title}
                            </h4>
                            <div className="flex items-center justify-between mt-3 text-xs opacity-95">
                              <span className="font-medium">{c.number}</span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {c.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </BackgroundPattern>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Circular;
