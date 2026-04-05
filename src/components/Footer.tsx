export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/40 py-10 px-4">
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold">П</div>
          <span className="font-semibold text-foreground/80">ПрофПроба</span>
        </div>
        <p className="text-foreground/40 text-sm">
          © 2024 ПрофПроба. Твой шанс на мечту.
        </p>
        <a
          href="#bot"
          className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
        >
          Перейти в Telegram-бот →
        </a>
      </div>
    </footer>
  );
}
