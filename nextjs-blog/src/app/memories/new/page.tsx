import { Camera, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        Voltar à timeline
      </Link>

      <form className="flex-co flex w-full flex-1 gap-2 ">
        <div className="flex items-center gap-4">
          <label
            htmlFor="media"
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-400"
          >
            <Camera className="h-4 w-4" />
            Anexar mídia
          </label>

          <label
            htmlFor="isPublic"
            className="gap=1.5 flex items-center text-sm text-gray-200 hover:text-gray-400"
          >
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              value="true"
              className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
            >
              Tornar a memória pública
            </input>
          </label>
        </div>

        <input type="file" id="media" className="invisible" />
      </form>
    </div>
  )
}
