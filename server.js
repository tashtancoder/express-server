const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('<h1>Welcome to home page</h1>')

})

app.get('/contact', (req, res) => {
    res.send('Contact me at satievtashtan@gmail.com')
})

app.get('/about', (req, res) => {
    res.send('I am software developer')
})

app.get('/hobbies', (req, res) => {
    res.send('<ul><li>Coding</li><li>playing tennis</li></ul>')
})
app.listen(3000, () => {
 console.log('Server started on port 3000')
})