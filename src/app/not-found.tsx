import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50 min-h-[60vh] flex items-center">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-8xl font-bold text-blue-600 mb-6">404</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/">
                <Home className="h-5 w-5" aria-hidden="true" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/services">
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
