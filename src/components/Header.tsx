import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <div className="fixed z-50 pt-8 md:pt-14 top-0 left-0 w-full">
      <header className="flex items-center justify-between container">
        <a href="/">
          <Logo className="w-[100px] md:w-[120px]" />
        </a>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {[
            { label: "Как это работает", href: "#how" },
            { label: "Для кого", href: "#audience" },
            { label: "Кейсы", href: "#cases" },
            { label: "Telegram-бот", href: "#bot" },
          ].map((item) => (
            <a
              className="uppercase inline-block font-mono text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="max-lg:hidden transition-colors ease-out duration-150 font-medium text-sm bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 rounded-full border border-primary/30"
          href="#bot"
        >
          Попробовать →
        </a>
        <MobileMenu />
      </header>
    </div>
  );
};