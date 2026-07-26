export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} Bentlemsani Mo. Amine
        </p>
        <p className="text-sm text-text-secondary">
          Built with React + Tailwind
        </p>
      </div>
    </footer>
  )
}
