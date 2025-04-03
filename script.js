document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("name").addEventListener("input", updatePreview);
    document.getElementById("email").addEventListener("input", updatePreview);
    document.getElementById("phone").addEventListener("input", updatePreview);
    document.getElementById("experience").addEventListener("input", updatePreview);
    document.getElementById("education").addEventListener("input", updatePreview);
});

function updatePreview() {
    document.getElementById("preview-name").innerText = document.getElementById("name").value;
    document.getElementById("preview-email").innerText = document.getElementById("email").value;
    document.getElementById("preview-phone").innerText = document.getElementById("phone").value;
    document.getElementById("preview-experience").innerText = document.getElementById("experience").value;
    document.getElementById("preview-education").innerText = document.getElementById("education").value;
}

function applyStyle() {
    let preview = document.getElementById("resume-preview");
    preview.className = "";  // Reset class
    let selectedStyle = document.getElementById("style").value;
    preview.classList.add(selectedStyle);
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.text(20, 20, document.getElementById("preview-name").innerText);
    
    doc.setFont("helvetica", "normal");
    doc.text(20, 30, "Email: " + document.getElementById("preview-email").innerText);
    doc.text(20, 40, "Phone: " + document.getElementById("preview-phone").innerText);
    doc.text(20, 50, "Experience:");
    doc.text(20, 60, document.getElementById("preview-experience").innerText, { maxWidth: 170 });

    doc.save("resume.pdf");
}
