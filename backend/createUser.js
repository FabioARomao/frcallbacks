const prisma = require('./src/prisma')
const bcrypt = require('bcryptjs')

async function run(){
  await prisma.user.create({
    data:{
      username:'admin',
      password: await bcrypt.hash('123456',10),
      role:'admin'
    }
  })
}

run()
