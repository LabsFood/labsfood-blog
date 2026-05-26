'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Globe2, ShieldCheck, MessagesSquare } from 'lucide-react'
import { FOUNDER } from '@/lib/content'

export function FounderSection() {
  return (
    <section className="section bg-cream relative overflow-hidden">
      <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <div className="relative">
            <div className="absolute -top-6 -left-6 size-32 rounded-full bg-navy-mid/15" />
            <div className="absolute -bottom-8 -right-4 size-48 rounded-full bg-teal/10" />
            <div className="relative rounded-3xl overflow-hidden bg-navy aspect-[4/5]">
              <Image
                src="/assets/photo-9.jpeg"
                alt={FOUNDER.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 bg-cream rounded-2xl px-5 py-3 shadow-xl border border-navy/5">
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-navy-mid">
                {FOUNDER.title}
              </div>
              <div className="font-display text-xl text-navy">{FOUNDER.name}</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <span className="eyebrow">Notre histoire</span>
          {/* <h2 className="display-md text-navy mt-4 text-balance">
            <span className="italic gradient-text-navy-mid">21 pays, </span>
            une conviction : la cuisine fait voyager mieux qu&apos;un visa.
          </h2> */}
          <p className="mt-6 lede text-pretty">{FOUNDER.bio}</p>
          <p className="mt-4 lede text-pretty">{FOUNDER.mission}</p>

          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            {/* <div className="rounded-2xl border border-navy/10 p-5">
              <Globe2 className="size-5 text-navy-mid mb-3" />
              <div className="font-display text-2xl text-navy">{FOUNDER.countries}</div>
              <div className="text-xs text-ink/60 mt-0.5">pays explorés</div>
            </div> */}
            <div className="rounded-2xl border border-navy/10 p-5">
              <ShieldCheck className="size-5 text-navy-mid mb-3" />
              <div className="font-display text-2xl text-navy">HACCP</div>
              <div className="text-xs text-ink/60 mt-0.5">certifiée</div>
            </div>
            <div className="rounded-2xl border border-navy/10 p-5">
              <MessagesSquare className="size-5 text-navy-mid mb-3" />
              <div className="font-display text-2xl text-navy">3</div>
              <div className="text-xs text-ink/60 mt-0.5">façons de communiquer: FR / PT / EN</div>
            </div>
          </div>

          <Link
            href="/devenir-chef"
            className="inline-flex items-center gap-2 mt-10 font-medium text-navy link-underline"
          >
            Vous voulez transmettre votre savoir-faire ? Rejoignez nos chefs partenaires
            <ArrowUpRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
