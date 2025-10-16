'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

export const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const Label = ({ text, htmlFor }: { text: string; htmlFor: string }) => (
    <label
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      htmlFor={htmlFor}
    >
      {text}
    </label>
  )

  const classInput =
    'block w-full p-1 border rounded-sm text-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white'

  return (
    <div className="max-w-md bg-black/70 p-6 rounded-lg text-white">
      <div className="mb-6 text-center">
        <strong className="text-lg md:text-xl">Sign Up</strong>
        <p className="text-xs md:text-sm">Crie sua conta no Jar-din</p>
      </div>
      <div>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name" text="Nome" />
              <input
                className={classInput}
                id="first-name"
                placeholder="Max"
                required
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                value={firstName}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name" text="Sobrenome" />
              <input
                className={classInput}
                id="last-name"
                placeholder="Robinson"
                required
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
                value={lastName}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" text="Email" />
            <input
              className={classInput}
              id="input_signup_email"
              type="email"
              placeholder="m@example.com"
              required
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              value={email}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password" text="Senha" />
            <input
              className={classInput}
              id="input_signup_password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              placeholder="Password"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password_confirmation" text="Confirme a senha" />
            <input
              className={classInput}
              id="password_confirmation"
              type="password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              autoComplete="new-password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="grid gap-2">
            <Label text="Imagem perfil (opcional)" htmlFor="image" />
            <div className="flex gap-4 flex-col items-center justify-center">
              {imagePreview && (
                <div
                  className="cursor-pointer relative w-16 h-16 rounded-sm overflow-hidden"
                  onClick={() => {
                    setImage(null)
                    setImagePreview(null)
                  }}
                  title="Apagar Imagem"
                >
                  <Image
                    src={imagePreview}
                    alt="Profile preview"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              <div className="flex items-center gap-2 w-full flex-col p-1 justify-center">
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="flex text-sm text-gray-400 file:mr-4 file:py-1 file:px-2 file:rounded-sm file:border-0 file:text-sm file:bg-[#DE3151] file:text-white hover:file:bg-[#B82A3C] cursor-pointer"
                />
              </div>
            </div>
          </div>

          <button
            className="w-full rounded-sm cursor-pointer disabled:cursor-none bg-[#DE3151] hover:bg-[#B82A3C] transition-colors duration-300 text-sm py-1"
            type="submit"
            disabled={loading}
            onClick={async () => {
              await signUp.email({
                email,
                password,
                name: `${firstName} ${lastName}`,
                image: image ? await convertImageToBase64(image) : '',
                callbackURL: '/',
                fetchOptions: {
                  onResponse: () => {
                    setLoading(false)
                  },
                  onRequest: () => {
                    setLoading(true)
                  },
                  onError: (ctx) => {
                    alert(ctx.error.message)
                    // toast.error(ctx.error.message)
                  },
                  onSuccess: async () => {
                    router.push('/')
                  },
                },
              })
            }}
          >
            {loading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              'Criar Conta'
            )}
          </button>
        </div>
      </div>
      <footer>
        <div className="mt-10 flex justify-center w-full border-t py-4">
          <p className="text-center text-xs text-neutral-500">
            Desenvolvido na <span className="text-orange-400">maldade.</span>
          </p>
        </div>
      </footer>
    </div>
  )
}

async function convertImageToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
