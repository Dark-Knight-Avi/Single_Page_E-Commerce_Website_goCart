const scriptURL = 'https://script.google.com/macros/s/AKfycbw2NjGZnDhMjflTMrs9yPhSu1a_dltURkKGVeEUAIghgK_Hzd8a1R7e1eNYLfC6MJsAHQ/exec'
  const form = document.forms['google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })