import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <section className="flex min-h-svh flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Bem-vindo ao meu projeto
      </h1>
      <p className="max-w-lg text-lg text-muted-foreground">
        Construído com Next.js, React e shadcn/ui.
      </p>
      <div className="flex gap-4">
        <Button size="lg">Começar</Button>
        <Button size="lg" variant="outline">
          Saiba mais
        </Button>
      </div>
    </section>
  )
}
