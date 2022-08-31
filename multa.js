function calcular() {
  var vel_usuario = document.getElementById("velocidade_carro");
  var res = document.getElementById("res");
  var velocidade = Number(vel_usuario.value);
  res.innerHTML = `<p id="velocidade">Sua velocidade atual é de ${velocidade}</p>`;
  if (velocidade > 80) {
    res.innerHTML += `
      <p id="func" >Sua velocidade excedeu o permitido .Você foi multado!</p>
    `;
    document.getElementById("func").style.color = " #931621";
    document.getElementById("func").style.fontFamily = "arial";
  }
  res.innerHTML += `<p>Dirija sempre com segurança</p>`;
}
