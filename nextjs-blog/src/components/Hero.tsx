import Image from 'next/image'
import nlwLogo from '../assets/nlw-spacetime.svg'
export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="NLW SpaceTime" />
      <div className="max-w-[420px] space-y-1">
        <h1 className="text-3xl font-bold leading-tight text-gray-50">
          Sua Cápsula do Tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e comparilhe com o mundo!
        </p>
      </div>
      <a
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-700"
        href=""
      >
        CADASTRAR LEMBRANÇA
      </a>
    </div>
  )
}