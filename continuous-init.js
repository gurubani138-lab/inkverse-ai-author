// Avoid passing the browser click event as the continuation flag.
document.querySelector('#runAgent').onclick = () => callAgent(false);
