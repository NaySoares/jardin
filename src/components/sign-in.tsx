'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { signIn } from '@/lib/auth-client'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <div className="max-w-md bg-black/70 p-6 rounded-lg text-white">
      <div className="mb-6 text-center">
        <strong className="text-lg md:text-xl">Sign In</strong>
        <p className="text-xs md:text-sm">
          Digite seu email e senha para entrar
        </p>
      </div>
      <div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="block w-full p-1 border rounded-sm text-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              id="input_signin_email"
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
            <div className="flex items-center">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="password"
              >
                Senha
              </label>
            </div>

            <input
              className="block w-full p-1 border rounded-sm text-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
              id="input_signin_password"
              type="password"
              placeholder="Senha"
              autoComplete="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-sm cursor-pointer disabled:cursor-none bg-[#DE3151] hover:bg-[#B82A3C] transition-colors duration-300 text-sm py-1"
            disabled={loading}
            onClick={async () => {
              const result = await signIn.email(
                {
                  email,
                  password,
                },
                {
                  onRequest: (ctx) => {
                    setLoading(true)
                  },
                  onResponse: (ctx) => {
                    setLoading(false)
                    alert(`Login realizado com sucesso!`)
                  },
                },
              )
              console.log(result)
            }}
          >
            {loading ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <p> Login </p>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
