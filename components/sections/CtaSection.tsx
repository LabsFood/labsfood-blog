'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { whatsappLink } from '@/lib/utils'

export function CtaSection() {
  return (
    <section className="section bg-cream relative">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-terra"
        >
          <div className="absolute inset-0 bg-grain opacity-10" />
          <div className="absolute -top-20 -right-20 size-96 rounded-full bg-cream/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full opacity-25">
            <Image src="/assets/photo-12.jpeg" alt="" fill className="object-cover" />
          </div>

          <div className="relative grid lg:grid-cols-12 gap-8 items-center p-10 md:p-16 lg:p-20">
            <div className="lg:col-span-8">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-cream/80">
                On reste en contact
              </span>
              <h2 className="font-display text-4xl md:text-6xl text-cream mt-4 text-balance leading-[0.95]">
                Une envie, une question, une idée d&apos;atelier&nbsp;?
              </h2>
              <p className="mt-6 text-cream/85 max-w-xl text-pretty">
                Notre service client est disponible 7j/7 — 24h/24 sur WhatsApp.
                <br />
                <span className="text-cream/65 text-sm">
                  Messages écrits uniquement, pas de notes vocales merci.
                </span>
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <Button
                asChild
                size="lg"
                className="bg-cream text-terra-deep hover:bg-cream-soft w-full justify-between"
              >
                <a
                  href={whatsappLink("Bonjour Lab's Food, ")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="size-4" />
                    Discuter sur WhatsApp
                  </span>
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cream/40 hover:bg-cream/10 hover:text-cream hover:border-cream/60 w-full justify-between"
              >
                <Link href="/contact">
                  Formulaire de contact
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
