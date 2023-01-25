const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const isSuccessBtn = $(".btn--success");
const isErrorBtn = $(".btn--error");
const isWarningBtn = $(".btn--warning");
const isInfoBtn = $(".btn--info");

const toast = ({
  type = "success",
  title = "",
  message = "",
  duration = 5000,
}) => {
  const main = $(".toasts");
  if (main) {
    const icons = {
      success: '<i class="fa-solid fa-circle-check"></i>',
      error: '<i class="fa-solid fa-circle-exclamation"></i>',
      warning: '<i class="fa-solid fa-triangle-exclamation"></i>',
      info: '<i class="fa-solid fa-circle-info"></i>',
    };

    const removeToast = setTimeout(() => {
      main.removeChild(toast);
    }, duration + 1000);

    const icon = icons[type];
    const timeDelay = (duration / 1000).toFixed(2);
    const toast = document.createElement("div");
    toast.onclick = (e) => {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(removeToast);
      }
    };
    toast.style.animation = `slideLeft ease-out .4s, fadeOut linear 1s ${timeDelay}s forwards`;
    main.appendChild(toast);
    toast.innerHTML = `
      <div class="toast toast--${type}">
        <div class="toast__icon toast__icon--${type}">
          ${icon}
        </div>
        <div class="toast__body">
          <h3 class="toast__title">
            ${title}
          </h3>
          <p class="toast__msg">
            ${message}
          </p>
        </div>
        <div class="toast__close">
          <i class="fa-sharp fa-solid fa-xmark"></i>
        </div>
      </div>
    `;
  }
};

isSuccessBtn.onclick = () => {
  toast({
    type: "success",
    title: "Success!",
    message: "Success message.",
    duration: 5000,
  });
};

isErrorBtn.onclick = () => {
  toast({
    type: "error",
    title: "Error!",
    message: "Error message.",
    duration: 5000,
  });
};

isWarningBtn.onclick = () => {
  toast({
    type: "warning",
    title: "Warning!",
    message: "Warning message.",
    duration: 5000,
  });
};

isInfoBtn.onclick = () => {
  toast({
    type: "info",
    title: "Info!",
    message: "Info message.",
    duration: 5000,
  });
};
