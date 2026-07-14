import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Building Temporal Knowledge Graphs",
  description:
    "Notes on building Atlas Core — a pipeline that turns news articles into a temporal Neo4j knowledge graph with GPT extraction and entity resolution.",
};

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <article className="max-w-3xl mx-auto px-6 md:px-12 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </Link>

        <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
          Blog · Jul 2026
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Building temporal knowledge graphs with Neo4j and GPT
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed mb-10">
          Lessons from Atlas Core on turning noisy news streams into structured,
          queryable knowledge — and why entity resolution matters as much as extraction.
        </p>

        <div className="space-y-8 text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Why temporal graphs?
            </h2>
            <p>
              Facts change. A company acquires another, a regulator shifts policy,
              a CEO steps down. A static knowledge base goes stale; a temporal graph
              records when relationships were valid, what evidence supported them,
              and when they ended.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Extraction is only half the battle
            </h2>
            <p>
              GPT can pull triples from articles, but the hard part is entity
              resolution: deciding that &ldquo;Apple Inc.&rdquo; and &ldquo;AAPL&rdquo;
              refer to the same node without merging unrelated entities. We combined
              type blocking, contextual embeddings, cross-encoder reranking, and
              Wikidata linking — cutting cross-type false merges to zero on our
              evaluation set.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Incremental beats batch
            </h2>
            <p>
              Rebuilding the full graph on every new article does not scale. Atlas
              Core tracks article status, processes incrementally, and uploads
              temporal events to Neo4j in near-real-time — so analysts query
              current knowledge without waiting for overnight batch jobs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Making graphs usable with MCP
            </h2>
            <p>
              A graph nobody can query is a database, not a product. Exposing the
              graph through an MCP server lets agents and analysts ask natural-language
              questions — timelines, relationship evidence, entity neighborhoods —
              without writing Cypher.
            </p>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-sm text-gray-300">
              See the full technical breakdown in the{" "}
              <Link
                href="/projects/atlas/"
                className="text-white underline underline-offset-4 hover:text-gray-200"
              >
                Atlas Core case study
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
