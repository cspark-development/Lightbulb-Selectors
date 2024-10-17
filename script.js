// Write your code here
let count = 0;

const lightbulbs = document.querySelectorAll(".lightbulb");
/*
let lightbulbs = [];
lightbulbs.push(document.querySelector(".lightbulb#lightbulb1"));
lightbulbs.push(document.querySelector(".lightbulb#lightbulb2"));
lightbulbs.push(document.querySelector(".lightbulb#lightbulb3"));
*/
const subtitle = document.querySelector(".subtitle"); 

for (const lightbulb of lightbulbs) {
	lightbulb.addEventListener("click", function() {
		count++;
		lightbulb.classList.toggle("active");
		if (count === 1) {
			subtitle.innerHTML = `You've clicked the lights 1 time`;
		} else {
			subtitle.innerHTML = `You've clicked the lights ${count} times`;
		};
	});
	lightbulb.addEventListener("mouseover", function() {
		lightbulb.classList.add("active");
	});
	lightbulb.addEventListener("mouseout", function() {
		lightbulb.classList.remove("active");
	});
};
