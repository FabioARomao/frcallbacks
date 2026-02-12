# frcallbacks

instalar nvm

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm --version
### Use a versao estavel nesta data usaremos a 20

nvm install 20
nvm use 20

### Definir a versao como padrao.

nvm alias default 20

### Confirmar as versoes de node e npm

node -v
npm -v

### Acessar a pasta do projeto e instalar os pacotes.

npm init -y
npm install prisma @prisma/client



se remover node modules:

rm -rf node_modules
rm -rf package-lock.json
rm -rf prisma
npm cache clean --force


na pasta raiz do backend:

npx prisma init

na pasta backend

npm install prisma@5 @prisma/client@5
npm install --save-dev prisma dotenv
npx prisma generate
npx prisma migrate dev
