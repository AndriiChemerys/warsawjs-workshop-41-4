const appElement = document.getElementById("app");
let isDone;
let count = 0;
let comboCount = 0;

function handleHomeLinkClick() {
  isDone = undefined;
  render();
}

function handleYesOnClick() {
  count++;
  comboCount++;
  isDone = true;
  render();
}

function handleNoOnClick() {
  isDone = false;
  comboCount = 0;
  render();
}

function renderTextElement() {
  let text = '';
  if (isDone === undefined) {
    text = "Czy zrealizowałeś dzisiejszy nawyk?"
  } else if (isDone) {
    text = "Świetnie!";
  } else {
    text = "Próbuj dalej ;)";
  }

  return `
    <p>${text}</p>
  `
}

function renderButtonsElement() {
  if (isDone === undefined) {
    return `
      <button onclick="handleYesOnClick()">Tak</button>
      <button onclick="handleNoOnClick()"">Nie</button>
    `
  } else {
    return ""
  }
}

function renderCountElement() {
  if (isDone === undefined) {
    return ""
  } else {
    return `
        <p>Zrealizowałem: ${count}</p>
        <p>"Dobra passa": ${comboCount}</p>
    `
  }
}

function renderAppElement() {
  const textElement = renderTextElement();
  const buttonsElement = renderButtonsElement();
  const countElement = renderCountElement();

  return `
      <a onclick="handleHomeLinkClick()">Habits</a>
      ${textElement}
      ${buttonsElement}
      ${countElement}
    `
}

function render() {
  appElement.innerHTML = renderAppElement()
}

render();
