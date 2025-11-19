const toggleBtn = document.getElementById("toggleDark");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Guardar preferencia
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙";
    }
});

// Cargar tema guardado
if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
}
