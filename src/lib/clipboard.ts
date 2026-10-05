const FEEDBACK_DURATION_MS = 1500;

export async function copyWithFeedback(button: HTMLButtonElement, text: string) {
  button.dataset.label ??= button.textContent ?? "";
  try {
    await navigator.clipboard.writeText(text);
    button.textContent = "¡Copiado!";
  } catch {
    button.textContent = "No se pudo copiar";
  }
  setTimeout(() => (button.textContent = button.dataset.label!), FEEDBACK_DURATION_MS);
}
