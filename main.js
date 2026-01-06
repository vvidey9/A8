/* TOGGLE SHARE */
const shareBtn = document.getElementById("shareBtn");
const shareLinks = document.getElementById("shareLinks");

shareBtn.onclick = () => {
    window.open("", "_blank")
};
/* UNDANGAN */
function joinWhatsAppGroup() {
    window.open("https://whatsapp.com/channel/0029Vb6u0dtF6sn6yOLboZ3R");
}

function openFacebookPage() {
    window.open("https://www.facebook.com/share/1AHBZiuybF/");
}


const targetURL = "https://s.shopee.co.id/6puAFdql7p";
let opened = false;

const videoOverlay = document.getElementById("videoOverlay");

if (videoOverlay) {
    videoOverlay.addEventListener("click", function () {
        if (!opened) {
            opened = true;
            window.open(targetURL, "_blank"); // BUKA TAB BARU
        }
        this.remove(); // setelah klik pertama, video bisa dikontrol normal
    });
}






