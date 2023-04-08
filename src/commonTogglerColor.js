let header = document.querySelector(".header");
let header_h1 = document.querySelector(".header h1");
let color_button = document.querySelector(".color_changer button");
let color_button_icon = document.querySelector(".color_changer > i");
let main_content = document.querySelector(".main_content");

export const HeaderandBackgroundToggleOn = () => {
  header.style.backgroundColor = "hsl(209, 23%, 22%)";
  header_h1.style.color = "hsl(0, 0%, 100%)";
  color_button.style.color = "hsl(0, 0%, 100%)";
  color_button_icon.style.color = "hsl(0, 0%, 100%)";
  main_content.style.backgroundColor = "hsl(207, 26%, 17%)";
  main_content.style.color = "hsl(0, 0%, 100%)";
};

export const HeaderandBackgroundToggleOff = () => {
  header.style.backgroundColor = "hsl(0, 0%, 100%)";
  header_h1.style.color = "black";
  color_button.style.color = "black";
  color_button_icon.style.color = "black";
  main_content.style.backgroundColor = "hsl(0, 0%, 100%)";
  main_content.style.color = "black";
};
