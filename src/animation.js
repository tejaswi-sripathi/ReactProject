import confetti from "canvas-confetti";
import Swal from "sweetalert2";

// Helper: Cartoon character animation
function showCartoonAnimation() {
  const cartoon = document.createElement("img");
  cartoon.src = "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif"; // funny dancing cat gif 🐱
  cartoon.style.position = "fixed";
  cartoon.style.bottom = "20px";
  cartoon.style.left = "-150px"; // start from left off-screen
  cartoon.style.width = "150px";
  cartoon.style.zIndex = "9999";
  cartoon.style.transition = "all 6s linear";

  document.body.appendChild(cartoon);

  // Trigger movement
  setTimeout(() => {
    cartoon.style.left = "110%"; // move across the screen
  }, 100);

  // Remove after animation ends
  setTimeout(() => {
    cartoon.remove();
  }, 7000);
}

// Main notification
export function showOrderNotification(orderId) {
  Swal.fire({
    title: "🎉 Woohoo! 🎉",
    html: `<b>Your order has been placed!</b><br/>Order ID: <span style="color:#007bff">${orderId}</span><br/><br/>Enjoy the celebration! 🎊`,
    icon: "success",
    confirmButtonText: "Yay!",
    confirmButtonColor: "#28a745",
    background: "#fff8e1",
    showCancelButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: () => {
      // Confetti explosion at start
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ff6f61", "#6a5acd", "#ffd700", "#ff1493"],
      });

      // Cartoon animation
      showCartoonAnimation();

      // Confetti stream for 5s
      const duration = 2000;
      const end = Date.now() + duration;

      (function frame() {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          emojis: ["🎈", "✨", "⭐"],
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          emojis: ["🎈", "✨", "⭐"],
        });
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    },
  });
}
