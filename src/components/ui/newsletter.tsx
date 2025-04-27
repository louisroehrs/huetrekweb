import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Sparkles, AlertTriangle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface NewsletterProps {
  className?: string
}

export function Newsletter({ className }: NewsletterProps) {
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle")
  const [rank, setRank] = React.useState("Ensign")

  const ranks = ["Ensign", "Lieutenant", "Commander", "Captain", "Admiral"]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    if (email.includes("@")) {
      setStatus("success")
      setRank(ranks[Math.floor(Math.random() * ranks.length)])
      setEmail("")
    } else {
      setStatus("error")
    }
  }

  return (
    <Card className={`bg-zinc-900 border-orange-400 rounded-3xl ${className}`}>
      <CardContent className="p-6">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Star className="w-12 h-12 text-orange-400 mx-auto mb-4" />
          </motion.div>
          
          <h2 className="text-3xl font-bold mb-4 text-orange-400">Join the HueTrek Fleet</h2>
          <p className="text-lg mb-8 text-zinc-300">
            Subscribe to our newsletter for exclusive updates, tips, and early access to new features.
          </p>

          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="max-w-md mx-auto"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-orange-400 text-black hover:bg-orange-300 px-6 py-2 rounded-lg font-semibold"
                  >
                    Engage
                  </Button>
                </div>
              </motion.form>
            )}

            {status === "submitting" && (
              <motion.div
                key="submitting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-orange-400"
              >
                <div className="animate-pulse">Initializing transporter...</div>
              </motion.div>
            )}

            {status === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-green-400"
              >
                <Sparkles className="w-8 h-8 mx-auto mb-4" />
                <p className="text-lg font-semibold">
                  Welcome aboard, {rank}! Your subscription is confirmed.
                </p>
                <p className="text-sm mt-2 text-zinc-400">
                  You have been assigned the rank of {rank}
                </p>
                <Button
                  onClick={() => setStatus("idle")}
                  className="mt-4 bg-zinc-800 hover:bg-zinc-700"
                >
                  Subscribe Another Officer
                </Button>
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                key="error"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="text-red-400"
              >
                <AlertTriangle className="w-8 h-8 mx-auto mb-4" />
                <p>Red alert! Invalid email format detected.</p>
                <Button
                  onClick={() => setStatus("idle")}
                  className="mt-4 bg-zinc-800 hover:bg-zinc-700"
                >
                  Try Again
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  )
}
