import Swal from 'sweetalert2';

const input = document.getElementById('input-moeda');
const btnPesquisar = document.getElementById('btn-pesquisar');
const th = document.querySelector('th');
const tbody = document.querySelector('tbody');

btnPesquisar.addEventListener('click', (event) => {
  event.preventDefault()
  
  const valorInput = input.value.trim();
  const GET_API = `https://v6.exchangerate-api.com/v6/30607d70fceeab7d86efd9cf/latest/${valorInput}`;
  
  if (!valorInput) {
    Swal.fire({
      title: 'Erro',
      text: 'Por favor, insira uma moeda.',
      icon: 'warning',
    });
    return
  }

  fetch(GET_API)
  .then(res => res.json())
  .then(data => {
    const { conversion_rates } = data;
    tbody.innerHTML = '';
    const inputCapital = valorInput.toUpperCase();
    th.innerText = `Valores referentes a 1 ${inputCapital}`
    const moedas = Object.entries(conversion_rates);
    for(let i = 0; i < moedas.length; i += 5) {
      const tr = document.createElement('tr');

      for(let j = 0; j < 5; j++) {
        const td = document.createElement('td');
        if(moedas[i + j]) {
          const [moeda, valor] = moedas[i + j];
          const valorConvertido = valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: moeda
          })
          td.innerText = valorConvertido;
        }
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
  })
  .catch(() => {
    th.innerText = '';
    Swal.fire({
      title: 'Ops ...',
      text: 'Moeda nao existe',
      icon: 'error'
    })
  })
})

