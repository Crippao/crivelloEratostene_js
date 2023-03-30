"use strict";

function getNumberChoosenByUser() {
	const num = document.getElementById("num");
	const n = Number.parseInt(num.value);
	return n;
}

function delay() {
	return new Promise((res) => setTimeout(res, 20));
}

function getContainer() {
	const c = document.getElementById("numbers-container");
	return c;
}

function removeAllNumbersDiv() {
	const c = getContainer();
	c.innerHTML = "";
}

function getDefaultDiv(id) {
	const elemento = document.querySelector(`[data-id="${id}"]`);
	return elemento;
}

function shouldHideDiv() {
	const check = document.getElementById("onlyPrimi");
	const c = check.checked;
	return c;
}

async function onClick() {
	removeAllNumbersDiv();
	const container = getContainer();

	const n = getNumberChoosenByUser();

	if (isNaN(n)) {
		alert("Inserisci un valore");
		return;
	}

	const array = [];

	for (let i = 0; i <= n; i++) {
		array.push(i);
		const div = document.createElement("div");

		div.setAttribute("data-id", i);
		div.classList.add("box");
		div.innerText = array[i];

		container.appendChild(div);
	}

	const c = shouldHideDiv();

	// è stata inserita la radice quadrata perchè è necessario controllare i multipli solo fino
	// alla metà del numero stesso
	for (let i = 2; i < Math.sqrt(n); i++) {
		if (array[i] === 0) continue;
		for (let j = i + 1; j <= n; j++) {
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

function resetPage() {
	removeAllNumbersDiv();
	const text = document.getElementById("num");
	text.value = null;
}
