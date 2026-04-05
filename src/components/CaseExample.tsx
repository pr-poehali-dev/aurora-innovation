export function CaseExample() {
  return (
    <section id="cases" className="relative z-10 py-24 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-mono uppercase tracking-widest mb-4 block">Пример кейса</span>
          <h2 className="text-4xl md:text-5xl font-sentient font-bold mb-6">
            Как выглядит{" "}
            <span className="gradient-text">реальное задание</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-glow bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center text-xl">📣</div>
              <div>
                <div className="text-xs text-primary font-mono uppercase tracking-wider">Маркетинг</div>
                <div className="font-semibold">Уровень: Начинающий</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Запусти рекламную кампанию</h3>
            <div className="bg-background/50 rounded-xl p-4 mb-6 border border-border/50">
              <p className="text-foreground/70 text-sm leading-relaxed">
                Ты — маркетолог в небольшом кафе. Нужно привлечь новых клиентов. 
                Бюджет — 5 000 ₽. Опиши 3 идеи для продвижения и объясни, почему выбрал именно их.
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["Креативность", "Аналитика", "Коммуникация"].map(tag => (
                <span key={tag} className="text-xs bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded-full px-3 py-1">{tag}</span>
              ))}
            </div>
          </div>

          <div className="card-glow bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl">🎨</div>
              <div>
                <div className="text-xs text-blue-400 font-mono uppercase tracking-wider">Дизайн</div>
                <div className="font-semibold">Уровень: Начинающий</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Улучши интерфейс</h3>
            <div className="bg-background/50 rounded-xl p-4 mb-6 border border-border/50">
              <p className="text-foreground/70 text-sm leading-relaxed">
                Перед тобой страница приложения с неудобной кнопкой. 
                Пользователи жалуются, что не могут её найти. 
                Предложи 2 способа сделать интерфейс понятнее — и объясни логику.
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["UX-мышление", "Эмпатия", "Визуал"].map(tag => (
                <span key={tag} className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full px-3 py-1">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="#bot">
            <button className="text-primary hover:text-primary/80 transition-colors font-medium text-sm underline underline-offset-4">
              Хочу попробовать такой кейс →
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
