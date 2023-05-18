// Typescript + JSX = TSX
// JSX = Javascript + XML
import { User2 } from 'lucide-react'
import nlwLogo from '../assets/nlw-spacetime.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* LEFT */}
      <div className=" relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover p-16 px-28 py-16">
        {/* BLUR */}
        <div className="h[288px] blur-full absolute right-0 top-1/2 w-[526] -translate-x-2 -translate-y-1/2 rounded-full bg-purple-700 opacity-50" />

        {/* STRIPES */}
        <div className="bg-stripes absolute bottom-0 right-3 top-0 w-2 " />

        {/* PERFIL SIGN IN */}
        <a
          href=""
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-400"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User2 className="h-5 w-5 text-gray-500" />
          </div>

          <p className="max-w-[140px] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias!
          </p>
        </a>

        {/* HERO */}
        <div className="space-y-5">
          <Image src={nlwLogo} alt="NLW SpaceTime" />
          <div className="max-w-[420px] space-y-1">
            <h1 className="text-3xl font-bold leading-tight text-gray-50">
              Sua Cápsula do Tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e comparilhe com o
              mundo!
            </p>
          </div>
          <a
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-700"
            href=""
          >
            CADASTRAR LEMBRANÇA
          </a>
        </div>
        {/* COPYRIGHT */}
        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💚 no NLW da RocketSeat por{' '}
          <a
            target="_blank"
            rel="noreferrer"
            className="underline transition-colors hover:text-gray-400"
            href="https://github.com/Diogo-Santoro"
          >
            Diogo Santoro
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a
              href=""
              className="underline transition-colors hover:text-gray-400"
            >
              criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
