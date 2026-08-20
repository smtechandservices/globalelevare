import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import BlogGrid from "@/components/BlogGrid";
import EventsList from "@/components/EventsList";
import { site } from "@/lib/content";

const title = "Blogs & Events | Elevare Global";
const description =
  "UAE company formation guides, tax and banking notes, and upcoming webinars and workshops from Elevare Global.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title,
    description,
    url: "/blogs",
    type: "website",
  },
};

export default function BlogsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden pt-[128px] pb-16 md:pt-[150px] md:pb-20">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(160deg, var(--color-navy-deep), var(--color-navy) 55%, var(--color-navy-mid))",
            }}
          />
          <div className="glow-blob -right-20 -top-24 h-[360px] w-[360px] bg-accent/25" />
          <div className="glow-blob -bottom-24 -left-16 h-[300px] w-[300px] bg-brand-teal/15" />

          <div className="relative px-5 md:px-10">
            <span className="eyebrow mb-3 block text-accent-bright">Insights & events</span>
            <h1 className="max-w-[720px] text-[32px] font-extrabold leading-[1.1] text-white sm:text-[42px] lg:text-[52px]">
              Notes from the desk, and rooms worth showing up to.
            </h1>
            <p className="mt-4 max-w-[56ch] text-[15px] leading-relaxed text-white/70">
              Formation, tax and banking guides written by the people who file the paperwork
              plus the webinars and workshops where you can ask us directly.
            </p>
          </div>
        </section>

        <section id="blog" className="scroll-mt-24 bg-white px-5 py-16 md:px-10 md:py-20">
          <SectionHeading eyebrow="Blog" title="Technical notes & guides" />
          <BlogGrid />
        </section>

        <section id="events" className="scroll-mt-24 bg-bg-soft px-5 py-16 md:px-10 md:py-20">
          <SectionHeading
            eyebrow="Events"
            title="Upcoming webinars & workshops"
            intro="Free to attend. Seats are limited on the online sessions, and the in-person clinic runs small on purpose."
          />
          <EventsList />
        </section>

      </main>
      <Footer />
    </>
  );
}
