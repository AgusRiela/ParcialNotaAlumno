let nota1 = <HTMLInputElement>document.getElementById("nota1");
let btn1 = <HTMLButtonElement>document.getElementById("btn1");
let Divresultado = <HTMLParagraphElement>document.getElementById("resultado");
let not1: number;
btn1.addEventListener("click", () => {
  not1 = Number(nota1.value);
  if (not1 >= 8) {
    Divresultado.innerHTML = `El resultado es iEXCELENTE!`;
  } else if (not1 >= 5 && not1 < 8) {
    Divresultado.innerHTML = `El resultado es iAPROBADO!`;
  } else if (not1 < 5) {
    Divresultado.innerHTML = `El resultado es iDESAPROBADO!`;
  }
});
