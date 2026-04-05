export function CTASection() {
  return (
    <section className="relative z-10 py-24 px-4">
      <div className="container max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-sentient font-bold mb-6 leading-tight">
          Сделай первый шаг<br />
          к <span className="gradient-text">своей профессии</span>
        </h2>
        <p className="text-foreground/60 text-lg mb-10 max-w-xl mx-auto">
          Не угадывай. Не слушай советы «кем быть». Попробуй сам — и узнаешь точно.
        </p>
        <a
          href="#bot"
          className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-4 font-semibold text-lg transition-all hover:scale-105"
        >
          Начать →
        </a>
        <p className="text-foreground/30 text-sm mt-6">
          Бесплатно · Без регистрации · 10 минут
        </p>
      </div>
    </section>
  );
}
