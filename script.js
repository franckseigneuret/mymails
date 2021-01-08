// compteur
const checkNumberMessage = () => {
  const nb = document.querySelectorAll('h6').length
  const total = document.getElementById('totalNumber')
  total.textContent = nb
  // console.log(nb)
}
checkNumberMessage()

// supprimer message
const suppress = () => {
  trashes = document.querySelectorAll('.trash')
  for(let i=0; i<trashes.length; i++) {
    trashes[i].addEventListener('click', (e) => {
      let parent = e.target.parentNode
      // console.log(parent)
      parent.remove()
      checkNumberMessage()
    })
  }
}
suppress()

const newImage = () =>  {
  // let ref = 'https://thispersondoesnotexist.com/image'
  let ref = 'https://picsum.photos/60/60.jpg'
  return ref
}

document.getElementById('btn-add').addEventListener('click', ()=> {
  const newMessage = document.getElementById('new-message')
  let messageText = newMessage.value

  let messageBloc = document.createElement('div')
      messageBloc.className = 'row'
  let messageBloc2 = document.createElement('div')

  let messageAvatar = document.createElement('img')
      messageAvatar.setAttribute('src', newImage())
      messageAvatar.className = 'avatar'
  
  let messageH6 = document.createElement('h6')
  let messageP = document.createElement('p')

  let trash = document.createElement('img')
      trash.setAttribute('src', 'trash.png')
      trash.className = 'trash'
  
  
  messageH6.textContent = 'Fks'
  messageP.textContent = messageText
  messageBloc2.append(messageH6)
  messageBloc2.append(messageP)
  messageBloc.append(messageAvatar)
  messageBloc.append(messageBloc2)
  messageBloc.append(trash)

  document.getElementById('messages').prepend(messageBloc)

  trash.addEventListener('click', (e) => {
    let parent = e.target.parentNode
    parent.remove()
  })
  checkNumberMessage()
  newMessage.value = ''
})