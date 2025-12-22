import { terminal } from "terminal-kit";

export default class TerminalUtil {
  static titulo(label: string): void {
    terminal.clear();
    terminal.magenta(`${label}\n`)
    terminal.magenta('='.repeat(label.length) + '\n');
  }
}
