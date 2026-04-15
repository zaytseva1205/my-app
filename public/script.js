const form = document.getElementById('request-form');
const tableBody = document.getElementById('request-table-body');

let requests = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const clientName = document.getElementById('clientName').value;
  const phone = document.getElementById('phone').value;
  const service = document.getElementById('service').value;
  const status = document.getElementById('status').value;

  const request = {
    id: Date.now(),
    clientName,
    phone,
    service,
    status
  };

  requests.push(request);
  renderRequests();
  form.reset();
});

function renderRequests() {
  tableBody.innerHTML = '';

  requests.forEach((request, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${request.clientName}</td>
      <td>${request.phone}</td>
      <td>${request.service}</td>
      <td>${request.status}</td>
      <td>
        <button class="delete-btn" onclick="deleteRequest(${request.id})">Удалить</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function deleteRequest(id) {
  requests = requests.filter(request => request.id !== id);
  renderRequests();
}