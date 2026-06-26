import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Page() {
  return (
    <>
      <section className="flex min-h-svh items-center justify-center">
        <h1 className="text-6xl font-bold uppercase tracking-widest sm:text-8xl">
          Grayscale<span className="text-lg align-top">&reg;</span>
        </h1>
      </section>

      <section className="grid grid-cols-1 gap-6 px-6 py-24 sm:grid-cols-3">
        <Card className="aspect-square">
          <CardHeader>
            <CardTitle className="text-2xl">Design</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Interfaces modernas e minimalistas.
          </CardContent>
        </Card>

        <Card className="aspect-square">
          <CardHeader>
            <CardTitle className="text-2xl">Desenvolvimento</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Código limpo e performático.
          </CardContent>
        </Card>

        <Card className="aspect-square">
          <CardHeader>
            <CardTitle className="text-2xl">Marketing</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Estratégias que geram resultados.
          </CardContent>
        </Card>
      </section>
    </>
  )
}
