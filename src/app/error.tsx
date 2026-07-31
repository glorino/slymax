"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { AlertTriangle, RefreshCcw, Home } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50 min-h-[60vh] flex items-center">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-full bg-red-100 flex items-center justify-center">
              <AlertTriangle className="h-10 w-10 text-red-600" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Something went wrong
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            An unexpected error occurred. Please try again or contact us if the problem persists.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={reset} size="lg" className="gap-2">
              <RefreshCcw className="h-5 w-5" aria-hidden="true" />
              Try Again
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/">
                <Home className="h-5 w-5" aria-hidden="true" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
