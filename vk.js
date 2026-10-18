// запись: копируем готовое сообщение и открываем сообщество во ВКонтакте
document.addEventListener("click", async (e) => {
  const a = e.target.closest("[data-vk-send]"); if (!a) return;
  const t = (document.querySelector("[data-s-bubble]") || {}).textContent || "";
  try { await navigator.clipboard.writeText(t); } catch (_) {}
  const n = document.querySelector("[data-s-copied]");
  if (n) { n.hidden = false; setTimeout(() => (n.hidden = true), 4000); }
});
