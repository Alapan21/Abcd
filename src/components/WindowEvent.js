document.addEventListener('keydown', logKey);
function logKey(e) {
  // console.log(`${e.code}`);
  e.preventDefault();
  let ele = document.getElementById(`${e.code}`);
  ele.style.backgroundColor = '#0984e3'
  setTimeout(() => { ele.style.backgroundColor = '#74b9ff' }, 200);
}