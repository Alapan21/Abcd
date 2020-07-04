document.addEventListener('keyup', logKey);
document.addEventListener('keypress', logKeyPress);
let f = 0;
// 
function logKey(e) {
  e.preventDefault();
  let ele = document.getElementById(`${e.code}`);
  if (e.code === 'CapsLock' && f === 0) {
    ele.style.backgroundColor = '#dfe6e9';
    ele.style.color = '#2d3436';
    f = 1;
  }
  else if (e.code === 'CapsLock' && f === 1) {
    ele.style.backgroundColor = '#2d3436';
    ele.style.color = '#dfe6e9';
    f = 0;
  }
  else {
    ele.style.backgroundColor = '#dfe6e9'
    ele.style.color = '#2d3436';
    setTimeout(() => { ele.style.backgroundColor = '#2d3436'; ele.style.color = '#dfe6e9' }, 200);
  }
}
function logKeyPress(e) {
  e.preventDefault();
  let ele = document.getElementById(`${e.code}`);
  if (e.code === 'CapsLock' && f === 0) {
    ele.style.backgroundColor = '#dfe6e9';
    ele.style.color = '#2d3436';
    f = 1;
  }
  else if (e.code === 'CapsLock' && f === 1) {
    ele.style.backgroundColor = '#2d3436';
    ele.style.color = '#dfe6e9';
    f = 0;
  }
  else {
    ele.style.backgroundColor = '#dfe6e9'
    ele.style.color = '#2d3436';
  }
}