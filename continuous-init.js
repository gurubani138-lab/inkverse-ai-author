// Kimi K2.5/K2.6 manages temperature internally and rejects unsupported values.
const nativeFetch = window.fetch.bind(window);
window.fetch = (input, init = {}) => {
  const url = typeof input === 'string' ? input : input?.url || '';
  if (/api\.moonshot\.(cn|ai)/i.test(url) && typeof init.body === 'string') {
    try {
      const body = JSON.parse(init.body);
      delete body.temperature;
      init = { ...init, body: JSON.stringify(body) };
    } catch (_) {
      // Preserve the original request if its body is not JSON.
    }
  }
  return nativeFetch(input, init);
};

// Avoid passing the browser click event as the continuation flag.
document.querySelector('#runAgent').onclick = () => callAgent(false);
