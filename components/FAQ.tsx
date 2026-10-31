import { ChevronDown } from "lucide-react";
import { type Faq, faqJsonLd } from "@/lib/seo";

type Props = {
  faqs: Faq[];
  title?: React.ReactNode;
  subtitle?: string;
};

// Server-rendered so every answer is in the HTML for search engines (and FAQ rich results).
const FAQ = ({ faqs, title, subtitle }: Props) => {
  return (
    <section id="faq" className="py-12 md:py-20 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          {title ?? (
            <>
              Frequently Asked <span className="gradient-text">Questions</span>
            </>
          )}
        </h2>
        {subtitle && <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="glass rounded-2xl border border-white/5 hover:border-primary-500/30 transition-colors group"
          >
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 font-semibold text-lg [&::-webkit-details-marker]:hidden">
              <h3>{faq.question}</h3>
              <ChevronDown
                size={20}
                className="shrink-0 text-primary-400 transition-transform duration-300 group-open:rotate-180"
              />
            </summary>
            <p className="px-6 pb-6 text-slate-400 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
