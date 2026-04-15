import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

const CAVEMAN_PROMPT = `CAVEMAN MODE ACTIVE. Rules: Drop articles/filler/pleasantries/hedging. Fragments OK. Short synonyms. Pattern: [thing] [action] [reason]. [next step]. Not: Sure! I would be happy to help you with that. Yes: Bug in auth middleware. Fix: Code/commits/security: write normal.`;

export default function (pi: ExtensionAPI) {
  let cavemanMode = true;

  pi.on("session_start", async (_event, ctx) => {
    cavemanMode = true;
    ctx.ui.notify(
      "CAVEMAN MODE ACTIVE. Rules: Drop articles/filler/pleasantries/hedging. Fragments OK. Short synonyms. Pattern: [thing] [action] [reason]. [next step]. Not: Sure! I would be happy to help you with that. Yes: Bug in auth middleware. Fix: Code/commits/security: write normal. User says stop caveman or normal mode to deactivate.",
      "info",
    );
  });

  pi.on("input", async (event, ctx) => {
    const text = event.text.trim().toLowerCase();

    if (text === "stop caveman" || text === "normal mode") {
      cavemanMode = false;
      ctx.ui.notify("Caveman mode off.", "info");
      return { action: "handled" as const };
    }

    if (text === "start caveman" || text === "caveman mode") {
      cavemanMode = true;
      ctx.ui.notify("Caveman mode on.", "info");
      return { action: "handled" as const };
    }

    return { action: "continue" as const };
  });

  pi.on("before_agent_start", async (event) => {
    if (!cavemanMode) return;

    return {
      systemPrompt: `${event.systemPrompt}\n\n${CAVEMAN_PROMPT}`,
    };
  });
}
