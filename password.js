let password = '88888888jjjjjjghgf'


if (password.length>=10 && /[a-zA-Z]/.test(password) && /\d/.test(password)) {
  console.log('done')
}


let password = '88888888jjjjj jghgf'

if (password.length>20 || !/^\s+$/.test(password) ){
  (console.log('try again'))
}
else if (password.length>=10 && /[a-zA-Z]/.test(password) && /\d/.test(password)) {
  console.log('done')
}