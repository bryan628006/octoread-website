import TopBar from "@/components/TopBar";
import ArticleClient from "@/components/ArticleClient";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-[#faf9f5]">
      <TopBar />
      <ArticleClient slug={slug} />
    </div>
  );
}
