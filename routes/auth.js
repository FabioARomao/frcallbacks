const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const router = express.Router()

// usuário fake inicial
const user = {
  id: 1,
  username: 'admin',
  password: bcrypt.hashSync('123456', 10)
}

router.post('/login', (req, res) => {
  const { username, password } = req.body

  if (username !== user.username)
    return res.status(401).json({ error: 'Usuário inválido' })

  const valid = bcrypt.compareSync(password, user.password)
  if (!valid)
    return res.status(401).json({ error: 'Senha inválida' })

  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '8h' }
  )

  res.json({ token })
})

module.exports = router
