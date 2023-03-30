async function OnClick() {
	const div = document.getElementById("span");
	div.innerHTML = "";

	const num = document.getElementById("num");
	const n = Number.parseInt(num.value);
	if (isNaN(n)) {
		alert("Inserisci un valore");
		return;
	}

	const array = [];

	for (i = 0; i <= n; i++) {
		array.push(i);
		const elemento = document.getElementById("span");
		const div = document.createElement("div");
		div.setAttribute("id", `div${i}`);
		div.setAttribute("data-id", i);
		div.classList.add("box");
		div.innerText = array[i];
		elemento.appendChild(div);
	}

	const check = document.getElementById("onlyPrimi");
	const c = check.checked;

	// è stata inserita la radice quadrata perchè è necessario controllare i multipli solo fino
	// alla metà del numero stesso
	for (i = 2; i < Math.sqrt(n); i++) {
		if (array[i] === 0) continue;
		for (j = i + 1; j <= n; j++) {
			const elemento = document.getElementById(`div${j}`);
			if (array[j] % array[i] === 0) {
				if (c) {
					const elem = document.getElementById("div0");
					elem.style.display = "none";
					elemento.style.display = "none";
				}
				array[j] = 0;
				elemento.innerText = j;
				elemento.className = "box boxNoPrimi";
			} else {
				elemento.className = "box boxPrimi";
			}
			await Delay();
		}
	}
	const primi = array.filter((e) => {
		return e !== 0;
	});
	alert("Calcolo Completato");
}

function Delay() {
	return new Promise((res) => setTimeout(res, 20));
}

function Reset() {
	const div = document.getElementById("span");
	div.innerHTML = "";
	const text = document.getElementById("num");
	text.value = null;
}
