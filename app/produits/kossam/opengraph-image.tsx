import { readFileSync } from 'fs'
import path from 'path'
import { ImageResponse } from 'next/og'

export const alt = "Kossam — Boisson lactée fermentée · Lab's Food"
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Palette Lab's Food
const NAVY      = '#00234B'
const NAVY_DEEP = '#001833'
const CREAM     = '#F4F6F7'
const MINT_DEEP = '#A8E5D8'

export default async function Image() {
  const frauncesData = readFileSync(
    path.join(
      process.cwd(),
      'public/fraunces-font-family/Fraunces-VariableFont_SOFTWONKopszwght.ttf',
    ),
  )

  const kossamImgSrc = `data:image/jpeg;base64,${readFileSync(
    path.join(process.cwd(), 'public/assets/koss.jpeg'),
  ).toString('base64')}`

  const logoSrc = `data:image/png;base64,${readFileSync(
    path.join(process.cwd(), 'public/whiteLogo.png'),
  ).toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Blob haut-droite */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: '50%',
            background: 'rgba(15,90,74,0.28)',
            filter: 'blur(90px)',
            display: 'flex',
          }}
        />
        {/* Blob bas-gauche */}
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: -80,
            width: 420,
            height: 420,
            borderRadius: '50%',
            background: 'rgba(25,60,64,0.55)',
            filter: 'blur(70px)',
            display: 'flex',
          }}
        />

        {/* ── Colonne gauche ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '57%',
            height: '100%',
            padding: '52px 32px 52px 64px',
            position: 'relative',
          }}
        >
          {/* Branding */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <img
              src={logoSrc}
              width={38}
              height={38}
              style={{ objectFit: 'contain' }}
            />
            <div
              style={{
                width: 1,
                height: 26,
                background: 'rgba(244,246,247,0.18)',
                display: 'flex',
              }}
            />
            <span
              style={{
                color: CREAM,
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: 5,
                textTransform: 'uppercase',
                opacity: 0.8,
                fontFamily: 'sans-serif',
              }}
            >
              Lab&apos;s Food
            </span>
          </div>

          {/* Titre produit */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 28,
                  height: 2,
                  background: MINT_DEEP,
                  display: 'flex',
                }}
              />
              <span
                style={{
                  color: MINT_DEEP,
                  fontSize: 11,
                  letterSpacing: 5,
                  textTransform: 'uppercase',
                  fontFamily: 'sans-serif',
                }}
              >
                Produit signature · 01
              </span>
            </div>

            {/* Nom */}
            <span
              style={{
                color: CREAM,
                fontSize: 112,
                fontWeight: 700,
                lineHeight: 0.86,
                fontFamily: 'Fraunces',
                letterSpacing: -3,
              }}
            >
              Kossam
            </span>

            {/* Sous-titre */}
            <span
              style={{
                color: CREAM,
                fontSize: 21,
                lineHeight: 1.5,
                opacity: 0.68,
                fontFamily: 'sans-serif',
                fontWeight: 400,
                maxWidth: 380,
              }}
            >
              Boisson lactée fermentée{'\n'}d&apos;inspiration camerounaise
            </span>
          </div>

          {/* Prix + localisation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
              {[
                { price: '20€', unit: null },
                { price: '38€', unit: '19€/btl' },
                { price: '54€', unit: '18€/btl' },
              ].map(({ price, unit }) => (
                <div
                  key={price}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 5,
                    backgroundColor: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.13)',
                    borderRadius: 14,
                    padding: '10px 20px 8px',
                  }}
                >
                  <span
                    style={{
                      color: CREAM,
                      fontSize: 26,
                      fontWeight: 700,
                      fontFamily: 'Fraunces',
                    }}
                  >
                    {price}
                  </span>
                  {unit && (
                    <span
                      style={{
                        color: CREAM,
                        fontSize: 10,
                        opacity: 0.45,
                        letterSpacing: 1.5,
                        textTransform: 'uppercase',
                        fontFamily: 'sans-serif',
                      }}
                    >
                      {unit}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <span
              style={{
                color: CREAM,
                fontSize: 11,
                opacity: 0.38,
                letterSpacing: 3,
                textTransform: 'uppercase',
                fontFamily: 'sans-serif',
              }}
            >
              Bouteilles 1.5L · Côte d&apos;Azur
            </span>
          </div>
        </div>

        {/* ── Colonne droite — image produit ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '43%',
            padding: '44px 56px 44px 16px',
            position: 'relative',
          }}
        >
          <img
            src={kossamImgSrc}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 28,
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Fraunces',
          data: frauncesData,
          style: 'normal',
          weight: 700,
        },
      ],
    },
  )
}
