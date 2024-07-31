import { Container } from "@/components/Container";

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-white py-2 sm:text-5xl">
          {title}
        </h1>
        <p className="my-6 text-lg text-zinc-600 dark:text-zinc-400">{intro}</p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  );
}
