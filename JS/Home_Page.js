const slides = document.querySelectorAll(".features_card_transparent_bg_class");
let counter = 0;
const dd=document.getElementById("features_previous_button_id");

slides.forEach((slide, index) => {
  console.log(slide);
  console.log("slide ", index, "left=>", index * 100);
  slide.style.left =`${index * 100}%`;
});


const features_next_button_function = () => {
  console.log(counter);
  if (counter >=slides.length-2) return;
  counter++;
  slideImage();

};

const features_previous_button_function = () => {
  console.log(counter);
  if (counter <= 0) return;
  counter--;
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    if (counter>0) {
      dd.style.visibility="visible";
      
    }else if(counter==0){
      dd.style.visibility="hidden";
    }


    console.log(counter);
    slide.style.transform = `translateX(-${(counter * 100)}%)`;
  });
};

var cout=1;
function eventcardhide() {
  
  console.log(cout)
  var x_1 = document.getElementById("event_card_learn_more_id");
  var x_2 = document.getElementById("event_card_content_id");
  if (cout%2!=0) {
    x_2.style.display = "block";
    cout=cout+1;
  } else {
    x_2.style.display = "none";
    cout=cout+1;
  }
}
var cout2=1;
function eventcardhide2() {
  
  console.log(cout)
  var x_1 = document.getElementById("event_card_learn_more_id_2");
  var x_2 = document.getElementById("event_card_content_id_2");
  if (cout%2!=0) {
    x_2.style.display = "block";
    cout=cout+1;
  } else {
    x_2.style.display = "none";
    cout=cout+1;
  }
}
var cout3=1;
function eventcardhide3() {
  
  console.log(cout)
  var x_1 = document.getElementById("event_card_learn_more_id_3");
  var x_2 = document.getElementById("event_card_content_id_3");
  if (cout%2!=0) {
    x_2.style.display = "block";
    cout=cout+1;
  } else {
    x_2.style.display = "none";
    cout=cout+1;
  }
}
