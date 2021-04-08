
checkbox = document.querySelector('.checkbox');

console.log('loading checker')

if(localStorage.getItem('mode') === null){
  console.log('checked empty')
  let mode = localStorage.setItem('mode', 'light')
} else if (localStorage.getItem('mode') === 'dark') {
    console.log('checked dark')
    checkbox.checked = true;
} else {
  console.log('You had cached lightmode' )
}

const setMode = () => {
  if (localStorage.getItem('mode') === 'light'){
    console.log('saw light, setting dark')
    localStorage.setItem('mode', 'dark')
  } else if (localStorage.getItem('mode') === 'dark'){
    console.log('saw dark, setting light')
    localStorage.setItem('mode', 'light')
  }
}

// checkbox.addEventListener('click', setMode())
