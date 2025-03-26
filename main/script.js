let noti = document.getElementById("notification");

function showToast(e) {
  let msgNoti = document.createElement("div");
  let message = "";
  let iconColor = "";

  if (e.target.textContent.trim() === "Success") {
    iconColor = "green";
    msgNoti.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" class="mr-2">
          <path fill="green" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
        </svg>
      <p>Successfully Submitted</p>
      <div class="absolute bottom-0 left-0 w-full h-[5px] bg-[#008000] animate-progressBar"></div>`;
  } else if (e.target.textContent.trim() === "Error") {
    iconColor = "red";
    msgNoti.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" class="mr-2">
          <path fill="red" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
        </svg>
      <p>Please fix the Error</p>
      <div class="absolute bottom-0 left-0 w-full h-[5px] bg-[#FF0000] animate-progressBar"></div>`;
  } else if (e.target.textContent.trim() === "Invalid") {
    iconColor = "orange";
    msgNoti.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" class="mr-2">
          <path fill="orange" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
        </svg>
      <p>Invalid input, check again</p>
      <div class="absolute bottom-0 left-0 w-full h-[5px] bg-[#FFA500] animate-progressBar"></div>`;
  }
  msgNoti.classList.add(
    "w-[400px]",
    "h-[80px]",
    "text-black",
    "bg-white",
    "font-medium",
    "my-[15px]",
    "mx-0",
    "shadow-[0_0_20px_rgba(0,0,0,0.3)]",
    "flex",
    "items-center",
    "p-4",
    "relative",
    "overflow-hidden",
    "gap-2"
  );
  noti.appendChild(msgNoti);

  setTimeout(() => {
    msgNoti.remove();
  }, 6000);
}
