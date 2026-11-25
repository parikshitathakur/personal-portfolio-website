document.getElementById('inquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('uname').value.trim();
    const box = document.getElementById('statusAlert');
    box.textContent = `Thanks${name ? ', ' + name : ''}! Note captured locally — you can also connect directly via GitHub, LinkedIn, or email.`;
    box.style.color = '#34d399';
    this.reset();
});
