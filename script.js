document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;

    const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
    });

    if (res.ok) {
        alert("¡Gracias! Te contactaré pronto.");
        form.reset();
    } else {
        alert("Error al enviar el formulario. Por favor intenta nuevamente.");
    }
});
