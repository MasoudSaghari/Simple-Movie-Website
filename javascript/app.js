
function scrollRow(direction) {
  const row = document.getElementById('trendingRow');
  const scrollAmount = 220; // اندازه هر کارت + gap
  row.scrollBy({
    left: direction * scrollAmount,
    behavior: 'smooth'
  });
}