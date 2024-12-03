import { Button } from "~/components/Button/Button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <Button variant="dark" outlined>
          DarkOutlined
        </Button>
        <Button variant="dark">DarkSolid</Button>
        <Button variant="green" outlined>
          GreenOutlined
        </Button>
        <Button variant="green">GreenSolid</Button>
      </div>
    </main>
  );
}
