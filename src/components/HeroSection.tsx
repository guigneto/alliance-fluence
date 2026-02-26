import { Calendar, CheckCircle2 } from "lucide-react";
import ScheduleModal from "@/components/ScheduleModal";

const HeroSection = () => {
  return (
    <section className="bg-radial-hero min-h-screen flex flex-col items-center justify-center px-4 py-20 sm:py-28">
      {/* Brand */}
      <div className="text-center mb-6">
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[0.25em] text-foreground">
          ALLIANCE <span className="text-gradient-primary">AGENCY</span>
        </h2>
      </div>

      {/* Tag */}
      <div className="mb-12 sm:mb-16 flex justify-center px-4 w-full">
        <div className="inline-flex items-center gap-2 bg-secondary/80 border border-border rounded-full px-5 py-2">
          <Calendar className="w-[1em] h-[1em] text-primary shrink-0" style={{ fontSize: "clamp(11px, 3.2vw, 14px)" }} />
          <span className="font-medium text-muted-foreground tracking-wide whitespace-nowrap" style={{ fontSize: "clamp(11px, 3.2vw, 14px)" }}>
            SESSÃO ESTRATÉGICA GRATUITA{" "}
            <span className="text-primary font-bold">| Vagas Limitadas</span>
          </span>
        </div>
      </div>

      {/* Hero Title */}
      <div className="max-w-4xl text-center mb-8">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          O ecossistema de marketing completo que usamos para levar empresas comuns a{" "}
          <span className="text-gradient-accent">múltiplos 6 dígitos</span>{" "}
          de faturamento mensal.
        </h1>
      </div>

      {/* Subtitle */}
      <p className="max-w-2xl text-center text-muted-foreground text-base sm:text-lg mb-14 leading-relaxed">
        Atraindo clientes de alto valor (High-Ticket) sem precisar depender de dancinhas virais ou produção de conteúdo exaustiva.
      </p>

      {/* Value Props */}
      <div className="max-w-2xl w-full mb-12">
        <p className="text-center text-foreground/80 text-sm sm:text-base font-medium mb-6">
          Nesta sessão de consultoria gratuita, vamos revelar:
        </p>
        <div className="space-y-4">
          <div className="flex items-start gap-3 bg-secondary/50 border border-border rounded-lg px-5 py-4">
            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <p className="text-foreground/90 text-sm sm:text-base leading-relaxed">
              Exatamente como injetamos de{" "}
              <span className="text-primary font-semibold">5 a 10 reuniões qualificadas por dia</span>{" "}
              na agenda do seu time comercial.
            </p>
          </div>
          <div className="flex items-start gap-3 bg-secondary/50 border border-border rounded-lg px-5 py-4">
            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <p className="text-foreground/90 text-sm sm:text-base leading-relaxed">
              A estrutura de funil com{" "}
              <span className="text-primary font-semibold">alta taxa de conversão</span>{" "}
              que transforma leads frios em compradores prontos para fechar negócio.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <ScheduleModal />
    </section>
  );
};

export default HeroSection;
