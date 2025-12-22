import TerminalUtil from "@/util/terminal";
import { terminal } from "terminal-kit";

export default async function menuFundamentos() {
  TerminalUtil.titulo("Menu Fundamentos");

  const res = await terminal.singleColumnMenu(["1. Polimorfismo", "Voltar"])
    .promise;

  switch (res.selectedIndex) {
    case 1:
      return;
  }

  await menuFundamentos();
}
