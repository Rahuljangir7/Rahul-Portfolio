"use client";

import { motion } from "framer-motion";
import { FileText, Download, Eye, Award } from "lucide-react";

const documents = [
  {
    title: "Professional Resume",
    type: "PDF Document",
    fileUrl: "/documents/Rahul_Jangir_Resume.pdf",
    icon: <FileText size={40} className="text-primary-400" />,
  },
  {
    title: "MERN Stack Certification",
    type: "Certificate",
    fileUrl: "/documents/mern_stack_certificate.pdf",
    icon: <Award size={40} className="text-accent-400" />,
  },
  {
    title: "Semrush SEO Crash Course",
    type: "Certificate",
    fileUrl: "/documents/Semrush%20SEO%20Crash%20Course%20with%20Brian%20Dean.pdf",
    icon: <Award size={40} className="text-purple-400" />,
  }
];

const Certifications = () => {
  return (
    <div className="mb-32 pt-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-display font-bold mb-4">
          Resume & <span className="gradient-text">Certifications</span>
        </h2>
        <p className="text-slate-400">View or download my professional credentials and achievements.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {documents.map((doc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-8 rounded-3xl group hover:border-primary-500/30 transition-all flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            
            <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 shadow-xl border border-white/5">
              {doc.icon}
            </div>
            
            <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
            <p className="text-slate-400 text-sm mb-8">{doc.type}</p>
            
            <div className="flex gap-4 w-full mt-auto">
              <a 
                href={doc.fileUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 glass rounded-xl hover:bg-white/10 hover:text-primary-400 transition-colors text-sm font-medium border border-white/5"
              >
                <Eye size={18} />
                View
              </a>
              <a 
                href={doc.fileUrl} 
                download
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors text-sm font-medium shadow-lg shadow-primary-500/25"
              >
                <Download size={18} />
                Download
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
