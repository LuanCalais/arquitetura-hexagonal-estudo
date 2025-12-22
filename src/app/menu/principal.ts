import TerminalUtil from "@/util/terminal";
import { terminal } from "terminal-kit";
import menuFundamentos from "./fundamentos";

export default async function menuPrincipal() {
  TerminalUtil.titulo("Menu Principal");
  const res = await terminal.singleColumnMenu(["1 - Fundamentos", "2 - Sair"])
    .promise;

  switch (res.selectedIndex) {
    case 0:
      await menuFundamentos();
      break;
    case 1:
      process.exit(0);
  }

  await menuPrincipal();
}
