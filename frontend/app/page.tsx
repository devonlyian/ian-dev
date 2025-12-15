import HomeClient from "@/components/HomeClient";
import { getAllContent } from "@/lib/content";

export default function Home() {
  const content = getAllContent();

  return <HomeClient content={content} />;
}
