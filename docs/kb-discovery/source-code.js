// Make the actual CORS request.
const request = (url, cb) => {
  // All HTML5 Rocks properties support CORS.
  // const url = 'http://updates.html5rocks.com';

  const xhr = createCORSRequest("GET", url);
  if (!xhr) {
    // console.log('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    const text = xhr.responseText;
    cb(null, text);
  };

  xhr.onerror = function() {
    cb(new Error("Woops, there was an error making the request."), null);
  };

  xhr.send();
};

// Create the XHR object.
const createCORSRequest = (method, url) => {
  const xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
};

const pre = document.createElement('pre')
pre.style.cssText = `
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  padding: 1em 2em; margin: 0;
  overflow: auto;
  display: none;
  background: rgba(255,255,255,.9);
  font-size: 2vw;
  color: #333;
  text-shadow: none;
`

const sourceCodeBtn = document.createElement('button')
sourceCodeBtn.style.cssText = `
  position: fixed;
  top: 1em;
  right: 2em;
  font-size: 2vw;
  line-height: 2;
  padding: 0 1em;
  color: #3896b5;
  background: #f0f0f0;
  border-radius: 3px;
  border: 0;
`
sourceCodeBtn.textContent = '查看原始码'
sourceCodeBtn.onclick = () => {
  request(location.href, (err, source) => {
    if (source) {
      pre.textContent = source
    }
  })
  sourceCodeBtn.style.display = 'none'
  closeBtn.style.display = 'block'
  pre.style.display = 'block'
}

const closeBtn = document.createElement('button')
closeBtn.style.cssText = `
  position: fixed;
  top: 1em;
  right: 2em;
  font-size: 2vw;
  line-height: 2;
  padding: 0 1em;
  color: #3896b5;
  background: #f0f0f0;
  border-radius: 3px;
  border: 0;
  display: none;
`
closeBtn.textContent = '隐藏原始码'
closeBtn.onclick = () => {
  closeBtn.style.display = 'none'
  pre.style.display = 'none'
  sourceCodeBtn.style.display = 'block'
}

document.body.appendChild(pre)
document.body.appendChild(closeBtn)
document.body.appendChild(sourceCodeBtn)
