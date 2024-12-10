
// Lấy tất cả các phần tử có class "page"

window.onload = function () {
  var preloader = document.querySelector(".loader");
  var mainContent = document.querySelector(".box");
  setTimeout(function () {
      // Ẩn preloader khi tải xong
      document.querySelector(".loader").style.display = "none";
      document.querySelector(".wrapper").style.display = "block";
      document.querySelector(".wrapper").classList.add('animation-status6');
  }, 4000);
};
const pages = document.querySelectorAll('.page');
let currentPage = 0; // Vị trí hiện tại bắt đầu từ trang đầu tiên

// Lắng nghe sự kiện cuộn chuột
window.addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
    // Lăn chuột xuống
    if (currentPage < pages.length - 1) {
      currentPage++;
    }
  } else {
    // Lăn chuột lên
    if (currentPage > 0) {
      currentPage--;
    }
  }

  if (pages[currentPage].classList.contains('page5')) {
    return;
  }
  // Cuộn đến trang hiện tại
  pages[currentPage].scrollIntoView({
    behavior: 'smooth', // Cuộn mượt
    block: 'start', // Đặt phần tử vào đầu màn hình
  });
});

//------------------------ ANIMATION NUMER PAGE 4---------------//
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".numer");
    const page4 = document.querySelector(".page4");
    let hasStarted = false; // Đảm bảo chỉ chạy một lần
  
    // Hàm đếm số
    const startCounter = () => {
      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        const duration = 2000; // Thời gian chạy (ms)
        const increment = target / (duration / 16);
  
        let current = 0;
  
        const updateCounter = () => {
          current += increment;
          if (current >= target) {
            counter.textContent = target; // Gán giá trị cuối cùng
          } else {
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter); // Gọi lại hàm cho frame tiếp theo
          }
        };
  
        updateCounter();
      });
    };
  
    // Sử dụng Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            hasStarted = true; // Đảm bảo chỉ chạy một lần
            startCounter();
          }
        });
      },
      { threshold: 0.5 } // Kích hoạt khi 50% của phần tử hiển thị
    );
  
    observer.observe(page4); // Theo dõi class "page4"
  });
  