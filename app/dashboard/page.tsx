import TopBar from "@/components/TopBar";
import DashboardClient from "@/components/DashboardClient";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#faf9f5]">
      <TopBar />
      <DashboardClient />
    </div>
  );
}
