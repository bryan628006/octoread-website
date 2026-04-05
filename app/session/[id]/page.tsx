import TopBar from "@/components/TopBar";
import SessionDetailClient from "@/components/SessionDetailClient";
import { getSessionById, sessions } from "@/lib/sessionData";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return sessions.map((s) => ({ id: s.id }));
}

export default async function SessionPage({ params }: Props) {
  const { id } = await params;
  const session = getSessionById(id);

  if (!session) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#faf9f5]">
      <TopBar />
      <SessionDetailClient session={session} />
    </div>
  );
}
