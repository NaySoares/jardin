export const Footer = () => {
  return (
    <footer className="bg-black text-white w-full py-3 mt-10 flex flex-row justify-between px-6 ">
      <p className="text-xs">&copy; {new Date().getFullYear()} Jar-din.</p>
      <p className="text-xs">
        Código é a forma mais honesta de raiva bem canalizada.
      </p>
    </footer>
  )
}
