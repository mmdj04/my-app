import { Building2, CreditCard, Wrench, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Building2,
    title: "Tenant Management",
    description:
      "Automate onboarding, screening, and communication with tenants across all your properties.",
  },
  {
    icon: CreditCard,
    title: "Rent Collection",
    description:
      "Never miss a payment. Automated reminders, late fee tracking, and multiple payment methods.",
  },
  {
    icon: Wrench,
    title: "Maintenance Tracking",
    description:
      "Track work orders, manage vendors, and keep your properties in top condition.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reports",
    description:
      "Real-time insights on occupancy, revenue, and portfolio performance across all regions.",
  },
]

const stats = [
  { value: "2.4K+", label: "Properties Managed" },
  { value: "98%", label: "Occupancy Rate" },
  { value: "15+", label: "Countries" },
  { value: "24/7", label: "Support" },
]

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center bg-[oklch(0.205_0_0)] px-6 py-20 text-white">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-transparent to-violet-900/30" />
        <div className="mx-auto max-w-6xl">
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            Property Management
            <br />
            Simplified.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/70">
            Manage your global real estate portfolio from one platform. Tenant
            tracking, rent collection, and maintenance — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="uppercase tracking-wider">
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 uppercase tracking-wider text-white hover:bg-white/10"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need
          </h2>
          <p className="mb-12 max-w-lg text-muted-foreground">
            A complete platform to manage tenants, payments, maintenance, and
            analytics — across any country.
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-4">
                <div className="flex size-10 items-center justify-center rounded-lg bg-foreground/5">
                  <feature.icon className="size-5 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-black/10 bg-[#ededed] px-6 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold tracking-tight sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="text-2xl font-medium leading-relaxed tracking-tight sm:text-3xl">
            &ldquo;Grayscale transformed how we manage our properties across 3
            countries. The platform pays for itself in the first
            quarter.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-semibold">Sarah Chen</p>
            <p className="text-sm text-muted-foreground">
              VP Operations, Atlas Real Estate
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[oklch(0.205_0_0)] px-6 py-24 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to simplify your property management?
          </h2>
          <p className="mt-4 text-white/70">
            Join thousands of property managers worldwide. Start your free trial
            today.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="uppercase tracking-wider">
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 uppercase tracking-wider text-white hover:bg-white/10"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
