//your JS code here. If required.
let button = document.getElementbyId("incrementBtn");
let counter = document.getElementbyId("counter");

button.addEventListener("click", function(){
	 let value = Number(counter.innerText);
	 alert(value); value++;
	 counter.innerText = value;

        });
