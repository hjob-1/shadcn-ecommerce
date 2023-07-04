import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <h2>shade-cn components</h2>
      <div className="flex gap-4">
        <Button variant="outline">button</Button>
        <Button>primary button</Button>
        <Button size="icon">B</Button>
        <Button variant="danger">danger</Button>
        <Button variant="link">danger</Button>
      </div>
    </main>
  );
}
