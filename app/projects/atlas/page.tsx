import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Atlas Core Case Study",
  description:
    "How Atlas Core transforms unstructured news into a temporal Neo4j knowledge graph with GPT extraction, entity resolution, and MCP querying.",
};

export default function AtlasCaseStudyPage() {
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
          Case Study · Whitehole
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Atlas Core
        </h1>
        <p className="text-xl text-gray-400 mb-10">
          Transforming unstructured news into a temporal Neo4j knowledge graph
          with near-real-time updates and natural-language querying.
        </p>

        <section className="prose prose-invert prose-p:text-gray-400 prose-headings:text-white max-w-none space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Problem</h2>
            <p className="leading-relaxed">
              Financial and geopolitical intelligence lives in unstructured news
              articles. Teams need structured, queryable knowledge — with entity
              relationships, temporal validity, and evidence — not static summaries.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Approach</h2>
            <p className="leading-relaxed mb-4">
              Atlas Core ingests articles from MongoDB, extracts structured
              triples with GPT, resolves entities using contextual embeddings and
              Wikidata linking, and incrementally updates a temporal Neo4j graph.
              An MCP server exposes the graph for natural-language queries.
            </p>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 font-mono text-sm text-gray-300 leading-relaxed">
              News API → MongoDB → GPT Extraction → Entity Resolution → Neo4j
              Graph → MCP Server
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Key technical work</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>Entity resolution with cross-encoder reranking and predicate validation</li>
              <li>Near-real-time pipeline with article lifecycle tracking and atomic queue handling</li>
              <li>Temporal relationships using valid_from, valid_to, observed_at, and evidence quotes</li>
              <li>Canonical ID migration across 1,716 existing Neo4j nodes</li>
              <li>Production automation with systemd services for unattended operation</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                ["15/15", "Offline tests passed"],
                ["0", "Cross-type false merges (ER eval)"],
                ["1,716", "Nodes migrated to canonical_id"],
              ].map(([metric, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center"
                >
                  <p className="text-2xl font-bold">{metric}</p>
                  <p className="text-xs text-gray-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Tech stack</h2>
            <p className="text-gray-400">
              Python · GPT / LLMs · MongoDB · Neo4j · MCP · Entity Resolution ·
              Wikidata · FastAPI
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Read more</h2>
            <Link
              href="/blog/building-temporal-knowledge-graphs/"
              className="text-white underline underline-offset-4 hover:text-gray-300"
            >
              Building temporal knowledge graphs with Neo4j and GPT →
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
