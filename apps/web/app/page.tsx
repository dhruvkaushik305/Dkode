import Content from "./_components/Content";
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-offwhite">
      <Navbar />
      <Content />
    </main>
  );
}
