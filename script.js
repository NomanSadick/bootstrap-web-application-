// Switch between light and dark modes
document.getElementById('toggleModeBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});


 // Example usage: Creating a chart using Chart.js
    document.addEventListener('DOMContentLoaded', function() {
      const ctx = document.getElementById('sportsChart').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Team A', 'Team B', 'Team C', 'Team D'],
          datasets: [{
            label: 'Points',
            data: [12, 19, 8, 15],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });