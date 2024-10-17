// Write your code here
let count = 0;

let lightbulbs = [];
lightbulbs.push(document.querySelector(".lightbulb#lightbulb1"));
lightbulbs.push(document.querySelector(".lightbulb#lightbulb2"));
lightbulbs.push(document.querySelector(".lightbulb#lightbulb3"));
const subtitle = document.querySelector(".subtitle"); 

for (let i = 0; i < 3; i++) {
	lightbulbs[i].addEventListener("click", function() {
		count++;
		lightbulbs[i].classList.toggle("active");
		subtitle.innerHTML = `You've clicked the lights ${count} times`;
	});
};
