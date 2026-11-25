document.getElementById('inquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const box = document.getElementById('statusAlert');
    box.textContent = '[Success] Notification dispatched to console.';
    box.style.color = '#34d399';
    this.reset();
});