import React from "react";
import { User, Phone, Briefcase, DollarSign } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

const ScheduleModal: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="group relative bg-accent text-accent-foreground font-display font-bold text-sm sm:text-base tracking-wider px-8 sm:px-12 py-4 sm:py-5 rounded-lg animate-pulse-glow hover:scale-105 transition-transform duration-300 cursor-pointer">
          <span className="flex items-center gap-3">QUERO AGENDAR MINHA SESSÃO AGORA</span>
        </button>
      </DialogTrigger>

      <DialogContent className="w-[92%] max-w-md rounded-2xl sm:rounded-lg p-0 overflow-hidden" onOpenAutoFocus={(e) => e.preventDefault()}>
        <div className="bg-emerald-200 p-6 text-center relative">
          <div className="inline-flex items-center gap-3 bg-emerald-100 rounded-full p-3 mx-auto max-w-[28rem]">
            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
              <Phone className="w-4 h-4 text-emerald-700" />
            </div>
            <p className="font-semibold text-sm text-emerald-800">Informe seu nome e telefone para concluir a inscrição</p>
          </div>
          <p className="mt-4 text-sm text-emerald-900 font-medium">O link será enviado exclusivamente no WhatsApp</p>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
            <svg width="34" height="12" viewBox="0 0 34 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 12L0 0H34L17 12Z" fill="#C7F3D0"/></svg>
          </div>
        </div>

        <div className="bg-background p-6 space-y-4">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"><User className="w-5 h-5" /></span>
              <input placeholder="Primeiro nome" className="w-full bg-white border border-border rounded-full px-14 py-4 placeholder:text-muted-foreground text-muted-foreground shadow-sm" />
            </div>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"><Phone className="w-5 h-5" /></span>
              <input placeholder="Seu WhatsApp com DDD" className="w-full bg-white border border-border rounded-full px-14 py-4 placeholder:text-muted-foreground text-muted-foreground shadow-sm" />
            </div>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"><Briefcase className="w-5 h-5" /></span>
              <select className="w-full bg-white border border-border rounded-full px-14 py-4 min-h-[56px] text-muted-foreground shadow-sm appearance-none">
                <option>Área de atuação</option>
                <option>Marketing</option>
                <option>Vendas</option>
                <option>Consultoria</option>
              </select>
            </div>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"><DollarSign className="w-5 h-5" /></span>
              <select className="w-full bg-white border border-border rounded-full px-14 py-4 min-h-[56px] text-muted-foreground shadow-sm appearance-none">
                <option>Faixa de faturamento</option>
                <option>Entre R$0 a R$15.000/mês</option>
                <option>Entre R$15.000 a R$50.000/mês</option>
                <option>Entre R$50.000 a R$80.000/mês</option>
                <option>Entre R$80.000 a R$150.000/mês</option>
                <option>Entre R$150.000 a R$250.000/mês</option>
                <option>Entre R$250.000 a R$500.000/mês</option>
                <option>Mais de R$500.000/mês</option>
              </select>
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <a
                  href="https://wa.me/5527995110707?text=Ol%C3%A1%2C%20quero%20garantir%20minha%20vaga%20na%20sess%C3%A3o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center bg-destructive text-destructive-foreground rounded-full py-4 font-bold shadow-lg glow-accent animate-pulse hover:scale-105 transition-transform"
                >
                  GARANTIR VAGA 100% GRÁTIS
                </a>
              </DialogClose>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleModal;
