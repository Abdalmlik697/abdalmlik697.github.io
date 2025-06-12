// أداة حساب العمر
function calculateAge() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    document.getElementById("ageResult").innerText = "عمرك: " + age + " سنة";
}

// أداة تحويل النص إلى PDF
function downloadPDF() {
    const text = document.getElementById("textInput").value;
    const blob = new Blob([text], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "text.pdf";
    link.click();
}

// أداة إنشاء رمز QR
function generateQR() {
    const input = document.getElementById("qrInput").value;
    const qrContainer = document.getElementById("qrCode");
    qrContainer.innerHTML = "";
    if (input.trim() === "") return;

    const qrImg = document.createElement("img");
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(input);
    qrContainer.appendChild(qrImg);
}
