import Swal from 'sweetalert2';

const input = document.getElementById('input-moeda');
const btnPesquisar = document.getElementById('btn-pesquisar');
const tds = document.getElementsByTagName('td');

btnPesquisar.addEventListener('click', (event) => {
  event.preventDefault()
  
  const valorInput = input.value;
  const GET_API = `https://v6.exchangerate-api.com/v6/30607d70fceeab7d86efd9cf/latest/${valorInput}`;
  fetch(GET_API)
  .then(res => res.json())
  .then(data => {
    const { conversion_rates } = data;
    const tdsArr = Array.from(tds);
    Object.entries(conversion_rates).forEach(([moeda, valor], index) => {
      if (tdsArr[index]) {
        tdsArr[index].innerHTML = `${moeda} ${valor}`;
      }
    })
  })
  .catch(() => {
    Swal.fire({
      title: 'Ops ...',
      text: 'Moeda nao existe',
      icon: 'error'
    })
  })
})

