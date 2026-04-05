import Icon from "@/components/ui/icon";

export function TelegramBot() {
  return (
    <section id="bot" className="relative z-10 py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="card-glow rounded-3xl p-10 md:p-16 border border-border bg-gradient-to-br from-violet-500/10 via-blue-500/5 to-emerald-500/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-[#229ED9]/20 border border-[#229ED9]/30 flex items-center justify-center mx-auto mb-6">
              <Icon name="Send" size={28} className="text-[#229ED9]" />
            </div>

            <span className="text-[#229ED9] text-sm font-mono uppercase tracking-widest mb-4 block">MVP · Telegram-бот</span>
            <h2 className="text-3xl md:text-4xl font-sentient font-bold mb-4">
              Уже доступно в Telegram
            </h2>
            <p className="text-foreground/60 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Наш бот — это первая версия продукта. Напиши ему, выбери направление и получи первое задание прямо сейчас
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#229ED9] hover:bg-[#229ED9]/90 text-white rounded-full px-8 py-4 font-semibold text-base transition-all hover:scale-105"
              >
                <Icon name="Send" size={18} />
                Перейти в бот
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 text-foreground/40 text-sm flex-wrap">
              <span className="flex items-center gap-1.5">
                <Icon name="CheckCircle" size={14} className="text-emerald-500" />
                Бесплатно
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="CheckCircle" size={14} className="text-emerald-500" />
                Без регистрации
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="CheckCircle" size={14} className="text-emerald-500" />
                Первый кейс за 10 минут
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
