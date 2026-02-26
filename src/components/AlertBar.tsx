import { AlertTriangle } from "lucide-react";

const AlertBar = () => {
  return (
    <div className="w-full bg-alert-bar py-3 px-4 text-center">
      <p className="text-alert-bar-foreground text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 flex-wrap">
        <AlertTriangle className="w-4 h-4 shrink-0" />
        <span>
          APENAS PARA EMPRESAS QUE BUSCAM ESCALAR O FATURAMENTO
        </span>
        <span className="hidden sm:inline text-alert-bar-foreground/60">|</span>
        <span className="text-accent font-bold">
          Se você não tem capacidade para atender mais clientes, saia dessa página!
        </span>
      </p>
    </div>
  );
};

export default AlertBar;
