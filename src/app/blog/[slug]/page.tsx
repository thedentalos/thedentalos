import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/config/blog-posts";
import { articleSchema } from "@/config/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Metadata {
  const slug =
    params instanceof Promise ? undefined : (params as { slug: string }).slug;
  if (!slug) return {};
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema(post)),
        }}
      />

      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-5 md:py-20">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-teal no-underline hover:text-teal-light md:mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            All posts
          </Link>

          <header className="mb-6 md:mb-10">
            <time
              dateTime={post.date}
              className="text-xs text-ink-soft sm:text-sm"
            >
              {new Date(post.date).toLocaleDateString("en-PK", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="mt-2 font-display text-2xl font-medium text-ink sm:text-3xl md:text-5xl">
              {post.title}
            </h1>
          </header>

          <div className="prose-custom text-sm leading-relaxed text-ink-soft space-y-3 md:text-base md:space-y-4">
            {post.body}
          </div>
        </div>
      </article>

      <section className="bg-enamel-dim">
        <div className="mx-auto max-w-3xl px-4 py-10 text-center sm:px-5 md:py-16">
          <h2 className="font-display text-xl font-medium text-ink sm:text-2xl">
            Want help with your clinic?
          </h2>
          <p className="mt-2 text-sm text-ink-soft">
            <Link
              href="/contact"
              className="font-medium text-coral no-underline hover:text-coral-deep"
            >
              Book a free audit
            </Link>{" "}
            and we&rsquo;ll review your setup — no obligation.
          </p>
        </div>
      </section>
    </>
  );
}
