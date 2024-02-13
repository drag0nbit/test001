const no = document.getElementById('no');
no.style.position = "absolute";

no.addEventListener('mouseover', () => {
    no.style.left = (Math.random() * window.innerWidth) + 'px';
    no.style.top = (Math.random() * window.innerHeight) + 'px';
});