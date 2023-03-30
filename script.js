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

	const elemento = document.getElementById("span");

	for (i = 0; i <= n; i++) {
		array.push(i);
		const div = document.createElement("div");

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
			const elementoCorrente = getDefaultDiv(j);
			if (array[j] % array[i] === 0) {
				if (c) {
					const elem = getDefaultDiv(0);
					elem.style.display = "none";
					elementoCorrente.style.display = "none";
				}
				array[j] = 0;
				elementoCorrente.innerText = j;
				elementoCorrente.className = "box boxNoPrimi";
			} else {
				elementoCorrente.className = "box boxPrimi";
			}
			await delay();
		}
	}

	alert("Calcolo Completato");
}

function delay() {
	return new Promise((res) => setTimeout(res, 20));
}

function reset() {
	const div = document.getElementById("span");
	div.innerHTML = "";
	const text = document.getElementById("num");
	text.value = null;
}

function getDefaultDiv(id) {
	const elemento = document.querySelector(`[data-id="${id}"]`);
	return elemento;
}
