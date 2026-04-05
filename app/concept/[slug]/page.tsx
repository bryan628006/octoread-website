import TopBar from "@/components/TopBar";
import ConceptClient from "@/components/ConceptClient";

interface ConceptPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ConceptPage({ params }: ConceptPageProps) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-[#faf9f5]">
      <TopBar />
      <ConceptClient slug={slug} />
    </div>
  );
}
