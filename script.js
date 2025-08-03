async function showDashboard() {
  const response = await fetch('data.json');
  const data = await response.json();

  document.getElementById('internName').textContent = data.internName;
  document.getElementById('referralCode').textContent = data.referralCode;
  document.getElementById('donations').textContent = data.totalDonations;

  document.getElementById('dashboard').style.display = 'block';
}