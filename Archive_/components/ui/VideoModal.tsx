'use client'

import { useEffect, useRef, useState } from 'react'
import { X, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react'

interface Recipe {
  n: number
  title: string
}

interface VideoModalProps {
  recipes: Recipe[]
}

export function VideoGrid({ recipes }: VideoModalProps) {
  const [active, setActive] = useState<Recipe | null>(null)

  return (
    <>
      <div className="grid md:grid-cols-3 gap-5">
        {recipes.map(({ n, title }, i) => (
          <button
            key={n}
            onClick={() => setActive({ n, title })}
            className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-navy-deep ring-1 ring-cream/10 hover:ring-mint-ink/40 transition-all duration-500 text-left cursor-pointer"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <video
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
              autoPlay
              muted
              loop
              playsInline
              poster={`/vert.png`}
            >
              <source src={`/assets/recette-${n}.mp4`} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />

            <div className="absolute top-5 right-5 size-11 rounded-full bg-cream/15 backdrop-blur-md border border-cream/25 grid place-items-center group-hover:bg-mint-ink group-hover:border-mint-ink transition-all duration-500">
              <Play className="size-4 fill-current text-cream" />
            </div>

            <div className="relative h-full flex flex-col justify-end p-6">
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-cream/50">
                Recette {String(n).padStart(2, '0')}
              </span>
              <h3 className="font-display text-2xl text-cream mt-1">{title}</h3>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <VideoModal recipe={active} onClose={() => setActive(null)} />
      )}
    </>
  )
}

function VideoModal({ recipe, onClose }: { recipe: Recipe; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === ' ') { e.preventDefault(); togglePlay() }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  })

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  function togglePlay() {
    const v = videoRef.current
    if (!v) return
    if (v.paused) { v.play(); setPlaying(true) }
    else { v.pause(); setPlaying(false) }
  }

  function toggleMute() {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  function handleTimeUpdate() {
    const v = videoRef.current
    if (!v || !v.duration) return
    setProgress((v.currentTime / v.duration) * 100)
  }

  function handleSeek(e: React.MouseEvent<HTMLDivElement>) {
    const v = videoRef.current
    if (!v) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    v.currentTime = ratio * v.duration
  }

  function openFullscreen() {
    videoRef.current?.requestFullscreen?.()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl overflow-hidden bg-navy shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Vidéo */}
        <video
          ref={videoRef}
          className="w-full aspect-[9/16] object-cover"
          src={`/assets/recette-${recipe.n}.mp4`}
          poster={`/vert.png`}
          autoPlay
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onClick={togglePlay}
        />

        {/* Barre de progression */}
        <div
          className="absolute bottom-[4.5rem] left-4 right-4 h-1 bg-cream/20 rounded-full cursor-pointer"
          onClick={handleSeek}
        >
          <div
            className="h-full bg-mint-ink rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Contrôles bas */}
        <div className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-center gap-3 bg-gradient-to-t from-navy to-transparent">
          <button
            onClick={togglePlay}
            className="size-10 rounded-full bg-cream/15 border border-cream/20 grid place-items-center hover:bg-mint-ink hover:border-mint-ink transition-all"
          >
            {playing
              ? <Pause className="size-4 text-cream fill-current" />
              : <Play className="size-4 text-cream fill-current" />
            }
          </button>

          <div className="flex-1">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cream/40">
              Recette {String(recipe.n).padStart(2, '0')}
            </p>
            <p className="font-display text-sm text-cream leading-tight">{recipe.title}</p>
          </div>

          <button
            onClick={toggleMute}
            className="size-9 rounded-full bg-cream/10 border border-cream/15 grid place-items-center hover:bg-cream/20 transition-all"
          >
            {muted
              ? <VolumeX className="size-4 text-cream" />
              : <Volume2 className="size-4 text-cream" />
            }
          </button>

          <button
            onClick={openFullscreen}
            className="size-9 rounded-full bg-cream/10 border border-cream/15 grid place-items-center hover:bg-cream/20 transition-all"
          >
            <Maximize className="size-4 text-cream" />
          </button>
        </div>

        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 size-9 rounded-full bg-navy/60 backdrop-blur-sm border border-cream/20 grid place-items-center hover:bg-cream/20 transition-all"
        >
          <X className="size-4 text-cream" />
        </button>
      </div>
    </div>
  )
}
