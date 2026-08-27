import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/config/blog-posts";
import { blogIndexMetadata } from "@/config/seo";

export const metadata: Metadata = blogIndexMetadata;

export default function BlogIndexPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 text-center sm:px-5 md:py-20">
          <h1 className="font-display text-3xl font-medium text-ink md:text-5xl">
            Dental Clinic Growth Insights
          </h1>
          <p className="mt-3 text-base leading-relaxed text-ink-soft md:mt-4 md:text-lg">
            Practical guides for dental clinics in Pakistan — no jargon, just
            what works.
          </p>
        </div>
      </section>

      {/* Blog posts */}
      <section className="bg-enamel-dim pb-12 md:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-5">
          {blogPosts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-line bg-white p-5 no-underline transition-shadow hover:shadow-md"
                >
                  <time
                    dateTime={post.date}
                    className="mb-2 text-xs text-ink-soft"
                  >
                    {new Date(post.date).toLocaleDateString("en-PK", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="mb-2 font-display text-base font-medium text-ink group-hover:text-teal transition-colors sm:text-lg">
                    {post.title}
                  </h2>
                  <p className="flex-1 text-sm leading-relaxed text-ink-soft">
                    {post.excerpt}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-coral group-hover:text-coral-deep">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-line bg-white p-8 text-center sm:p-12">
              <h2 className="font-display text-xl font-medium text-ink sm:text-2xl">
                Blog posts coming soon
              </h2>
              <p className="mt-2 text-sm text-ink-soft">
                We&rsquo;re working on our first articles. Check back soon or
                follow us on WhatsApp for updates.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
