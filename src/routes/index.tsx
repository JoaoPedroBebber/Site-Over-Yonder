import { createFileRoute } from "@tanstack/react-router";
import { MapPin, MessageCircle, Star, GraduationCap, Globe2, Users, Briefcase, BookOpen, Sparkles, Plane } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import escolaImg from "@/assets/escola.jpg";
import logoImg from "@/assets/Logo.png";
import founderImg from "@/assets/Daniel.jpeg";
import classroomImg from "@/assets/classroom.jpg";
import studentsImg from "@/assets/students.jpg";
import teachingImg from "@/assets/teaching.jpg";
import speakingClubOnlineImg from "@/assets/SpeakingClubOnline.jpeg";
import speakingClubPresencialImg from "@/assets/speakingclubpresencial.jpg";
import salaDeAulaImg from "@/assets/saladeaula.jpeg";
import teenImg from "@/assets/teen.jpg";
import kidsImg from "@/assets/kids.jpg";
import cookingClassImg from "@/assets/cookingclass.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Over Yonder — Escola de Inglês" },
      { name: "description", content: "Aprenda inglês com método imersivo na Over Yonder. Aulas para todas as idades, professores nativos e turmas reduzidas." },
      { property: "og:title", content: "Over Yonder — Escola de Inglês" },
      { property: "og:description", content: "Aprenda inglês com método imersivo na Over Yonder. Aulas para todas as idades." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const WHATSAPP_URL = "https://wa.me/554530201625?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Over%20Yonder.";
const MAPS_URL = "https://maps.google.com/?q=R.+Alm.+Barroso,+3548,+Toledo+PR";

const offerings = [
  { icon: Users, title: "Kids & Teens", desc: "Aulas lúdicas e dinâmicas para crianças e adolescentes desenvolverem fluência desde cedo." },
  { icon: GraduationCap, title: "Adultos", desc: "Do básico ao avançado, com foco em conversação e situações reais do dia a dia." },
  { icon: Briefcase, title: "Inglês Corporativo", desc: "Treinamentos in-company alinhados à sua área e objetivos profissionais." },
  { icon: Plane, title: "Inglês para Viagem", desc: "Curso intensivo para você embarcar com segurança e aproveitar cada destino." },
  { icon: BookOpen, title: "Preparatório Certificações Internacionais", desc: "Material exclusivo e simulados para você conquistar a pontuação que precisa." },
  { icon: Globe2, title: "Speaking Club", desc: "Encontros diários, presencial e online, com temas e tópicos diferentes todos os dias." },
];

const reviews = [
  { name: "Andre Ubinski", text: "Melhor escola de idiomas de Toledo. Professores super capacitados e método eficiente.", rating: 5 },
  { name: "Maíra", text: "Escola maravilhosa! As aulas do teacher Daniel são ótimas, dinâmicas e super legais! Recomendo", rating: 5 },
  { name: "Mara Machado", text: "Super indico. Professores com muita experiência e dedicação. Profissional muito competente.", rating: 5 },
];

const gallery = [salaDeAulaImg, teenImg, kidsImg, cookingClassImg];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 font-display font-bold text-lg">
            <img src={logoImg} alt="Over Yonder Logo" className="h-12 w-auto" />
            <span className="text-navy">Over <span className="text-orange">Yonder</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#oferecemos" className="hover:text-orange transition">O que oferecemos</a>
            <a href="#speaking-club" className="hover:text-orange transition">Speaking Club</a>
            <a href="#fundador" className="hover:text-orange transition">O Fundador</a>
            <a href="#avaliacoes" className="hover:text-orange transition">Avaliações</a>
            <a href="#contato" className="hover:text-orange transition">Contato</a>
          </nav>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-orange px-4 py-2 text-sm font-medium text-orange-foreground hover:opacity-90 transition shadow-soft">
            <MessageCircle className="h-4 w-4" /> Fale conosco
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-16 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-15 mix-blend-screen" style={{ background: "linear-gradient(135deg, rgba(14, 165, 233, 0.08), rgba(249, 115, 22, 0.10))" }}>
          <img src={escolaImg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-navy-foreground">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium border border-white/20">
              <Sparkles className="h-3.5 w-3.5 text-orange" /> Over Yonder
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05]">
              Vá <span className="text-orange">além</span> com o seu inglês.
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl">
              Na Over Yonder você não decora — você vive o inglês. Método imersivo,
              turmas pequenas e professores que se importam com a sua jornada.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 font-medium text-orange-foreground hover:opacity-90 transition shadow-glow">
                <MessageCircle className="h-4 w-4" /> Agendar aula experimental
              </a>
              <a href="#oferecemos"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-6 py-3 font-medium text-white hover:bg-white/10 transition">
                Ver cursos
              </a>
            </div>
            <div className="mt-10 flex items-center gap-8 text-white/80 text-sm">
              <div><div className="text-3xl font-bold text-white">+100</div>alunos satisfeitos</div>
              <div><div className="text-3xl font-bold text-white">+7</div>anos de história</div>
              <div><div className="text-3xl font-bold text-white">5.0★</div>no Google</div>
            </div>
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section id="oferecemos" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-orange font-semibold text-sm uppercase tracking-widest">O que oferecemos</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy">Cursos para cada momento da sua vida</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Do primeiro "hello" à fluência completa — temos a turma certa para você.
            </p>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="group rounded-3xl border border-border bg-card p-8 hover:border-orange hover:-translate-y-1 transition-all shadow-soft">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-orange/15 bg-[linear-gradient(135deg,rgba(255,140,0,0.18),rgba(15,23,42,0.06))] shadow-soft group-hover:scale-105 transition">
                    <Icon className="h-7 w-7 text-orange" />
                  </div>
                  <div className="h-8 w-8 rounded-full border border-orange/15 bg-orange/10" />
                </div>
                <h3 className="text-xl font-bold text-navy">{title}</h3>
                <p className="mt-2 text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKING CLUB */}
      <section id="speaking-club" className="py-24 md:py-32 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <span className="text-orange font-semibold text-sm uppercase tracking-widest">Speaking Club</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy">Nosso maior diferencial: o clube de conversação</h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Aqui, o inglês deixa de ser apenas teoria e vira prática real. Nos encontros semanais, você conversa, escuta, erra, aprende e ganha confiança em um ambiente leve, acolhedor e motivador.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              É a nossa assinatura: falar com segurança, desenvolver fluência natural e sentir que o inglês realmente faz parte da sua rotina.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 font-medium text-orange-foreground hover:opacity-90 transition shadow-glow">
              <MessageCircle className="h-4 w-4" /> Quero participar do Speaking Club
            </a>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <figure className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <img
                src={speakingClubOnlineImg}
                alt="Speaking Club online"
                loading="lazy"
                className="h-56 sm:h-60 w-full object-cover"
              />
              <figcaption className="p-4 text-sm text-muted-foreground">
                <span className="block text-xs uppercase tracking-widest text-orange">Online</span>
                <span className="mt-1 block text-base font-semibold text-navy">Conversas ao vivo e práticas em tempo real</span>
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <img
                src={speakingClubPresencialImg}
                alt="Speaking Club presencial"
                loading="lazy"
                className="h-56 sm:h-60 w-full object-cover"
              />
              <figcaption className="p-4 text-sm text-muted-foreground">
                <span className="block text-xs uppercase tracking-widest text-orange">Presencial</span>
                <span className="mt-1 block text-base font-semibold text-navy">Encontros presenciais para falar com mais segurança</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section id="fundador" className="py-24 md:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-warm opacity-20 blur-2xl" />
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-white/60 bg-card shadow-soft">
              <img
                src={founderImg}
                alt="Daniel Brito Castro Alén, fundador da Over Yonder"
                width={768}
                height={896}
                loading="lazy"
                className="h-full w-full object-cover object-[center_18%]"
              />
            </div>
            <div className="relative mx-auto mt-4 w-full max-w-md rounded-2xl bg-navy p-5 text-navy-foreground shadow-glow md:absolute md:-bottom-6 md:right-0 md:mt-0 md:w-64">
              <div className="text-xs uppercase tracking-widest text-orange">Fundador</div>
              <div className="mt-1 font-bold">Daniel Brito Castro Alén</div>
              <div className="text-xs text-white/70 mt-1">Certificado CEFRC2 e TKTs pela universidade de Cambridge</div>
            </div>
          </div>
          <div>
            <span className="text-orange font-semibold text-sm uppercase tracking-widest">O Fundador</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy">A paixão por conectar mundos</h2>
            <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
              Sou graduado em Letras (Português/Inglês) pelo Centro Universitário Assis Gurgacz (Centro FAG) e em Pedagogia pela Universidade Estadual de Maringá (UEM). Atuo como docente há mais de 14 anos no ensino de língua inglesa, com experiência na educação básica e em cursos livres, além de ministrar aulas de Português como Língua Adicional/Estrangeira (PLA/PLE). Possuo certificações internacionais de proficiência em língua inglesa pela Universidade de Cambridge (nível C2 - CPE, CAE e FCE) e de qualificação docente (TKT Modules 1, 2 e 3, Young Learners, KAL e CLIL), além de habilitação para aplicação dos exames TOEIC e TOEFL (ETS).
            </p>
            <blockquote className="mt-8 border-l-4 border-orange pl-6 italic text-navy">
              "Over yonder" — lá longe, além do horizonte. É para lá que queremos te levar.
            </blockquote>
          </div>
        </div>
      </section>

      {/* GALLERY + REVIEWS */}
      <section id="avaliacoes" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-orange font-semibold text-sm uppercase tracking-widest">Nossa comunidade</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-navy">Momentos & Avaliações</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Quem estuda com a gente, recomenda. Veja por que.
            </p>
          </div>

          {/* Gallery */}
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-3xl shadow-soft group">
                <img
                  src={src}
                  alt={`Momento Over Yonder ${i + 1}`}
                  loading="lazy"
                  className="h-56 md:h-64 w-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
            ))}
          </div>

          {/* Reviews */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-3xl border border-border bg-card p-8 shadow-soft">
                <div className="flex gap-0.5 text-orange">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-foreground leading-relaxed">"{r.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-warm flex items-center justify-center text-orange-foreground font-bold">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-navy">{r.name}</div>
                    <div className="text-xs text-muted-foreground">Aluno(a) Over Yonder</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://g.page/r/CYx5uzLrJr6BEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-5 py-3 text-sm font-semibold text-orange hover:bg-orange/20 transition"
            >
              Avalie-nos no Google
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contato" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-navy-foreground">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold">Vamos começar essa jornada?</h2>
            <p className="mt-4 text-white/80 text-lg">
              Estamos a um clique (ou uma visita) de distância. Venha conhecer nossa escola
              ou fale com a gente agora mesmo pelo WhatsApp.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-4 font-medium text-orange-foreground hover:opacity-90 transition shadow-glow">
                <MessageCircle className="h-5 w-5" /> Chamar no WhatsApp
              </a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-6 py-4 font-medium text-white hover:bg-white/10 transition">
                <MapPin className="h-5 w-5" /> Ver no Google Maps
              </a>
            </div>
          </div>
          <div className="rounded-3xl bg-white/5 border border-white/15 backdrop-blur p-8 shadow-glow">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-orange flex items-center justify-center text-orange-foreground">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-orange">Endereço</div>
                <div className="mt-1 font-semibold">R. Alm. Barroso, 3548 - Vila Industrial, Toledo - PR, 85919-899</div>
                <div className="text-white/70 text-sm">Toledo - PR — CEP 85919-899</div>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-orange flex items-center justify-center text-orange-foreground">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-orange">WhatsApp</div>
                <div className="mt-1 font-semibold">+55 45 3020-1625</div>
                <div className="text-white/70 text-sm">Seg a Sex • 09:00 às 19:30 • Sáb • 08:00 às 12:00</div>
              </div>
            </div>
            <div className="mt-6 flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-orange flex items-center justify-center text-orange-foreground">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-orange">Aula experimental</div>
                <div className="mt-1 font-semibold">Gratuita e sem compromisso</div>
                <div className="text-white/70 text-sm">Agende pelo WhatsApp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy text-navy-foreground py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2 font-display font-bold">
            <img src={logoImg} alt="Over Yonder Logo" className="h-6 w-auto" />
            Over Yonder — Escola de Inglês
          </div>
          <div className="text-white/60">© {new Date().getFullYear()} Over Yonder. Todos os direitos reservados.</div>
        </div>
      </footer>
    </div>
  );
}
