const router = require('express').Router()
const prisma = require('../prisma')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/login', async (req,res)=>{
  const { username, password } = req.body

  const user = await prisma.user.findUnique({ where:{ username }})
  if(!user) return res.status(401).json({error:'user'})

  const ok = await bcrypt.compare(password, user.password)
  if(!ok) return res.status(401).json({error:'pass'})

  const token = jwt.sign(
    { id:user.id, role:user.role },
    process.env.JWT_SECRET,
    { expiresIn:'8h' }
  )

  res.json({ token })
})

module.exports = router
