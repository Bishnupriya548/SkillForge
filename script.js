document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".track-tab");
  const contents = document.querySelectorAll(".track-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));
      this.classList.add("active");
      const target = this.getAttribute("href");
      document.querySelector(target).classList.add("active");
    });
  });

  if (window.location.hash) {
    const targetTab = document.querySelector(
      `.track-tab[href="${window.location.hash}"]`
    );
    if (targetTab) {
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      targetTab.classList.add("active");
      document.querySelector(window.location.hash).classList.add("active");
    }
  }
});
function updateProgress(module) {
  const container = document.getElementById(`${module}-module`);
  const checkboxes = container.querySelectorAll('input[type="checkbox"]');
  const checked = container.querySelectorAll('input[type="checkbox"]:checked');
  const progress = (checked.length / checkboxes.length) * 100;
  document.getElementById(`${module}-progress`).style.width = `${progress}%`;
}
function switchToTrack(trackId) {
  document.querySelectorAll(".track-tab").forEach((tab) => {
    tab.classList.remove("active");
  });
  document.querySelectorAll(".track-content").forEach((content) => {
    content.classList.remove("active");
  });
  document
    .querySelector(`.track-tab[href="#${trackId}"]`)
    ?.classList.add("active");
  document.getElementById(trackId)?.classList.add("active");
  document.getElementById(trackId)?.scrollIntoView({ behavior: "smooth" });
}
