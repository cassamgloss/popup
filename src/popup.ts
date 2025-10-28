function showPopup(): void {
  const overlay = document.getElementById("popup-overlay");
  if (overlay) overlay.style.display = "flex";
}

function closePopup(): void {
  const overlay = document.getElementById("popup-overlay");
  if (overlay) overlay.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const showButton = document.getElementById("show-popup");
  const confirmButton = document.getElementById("confirm-download");
  const editButton = document.getElementById("edit-info");

  // Mostra o pop-up manualmente (ou você pode colocar um setTimeout)
  showButton?.addEventListener("click", showPopup);

  // Fecha o popup e executa ações específicas
  confirmButton?.addEventListener("click", () => {
    alert("Download iniciado!");
    closePopup();
  });

  editButton?.addEventListener("click", () => {
    alert("Redirecionando para editar informações...");
    closePopup();
  });
});
