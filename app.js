const express = require('express')
const config = require('config')
const cors = require('cors')
const sequelize = require('./db')
const app = express()
const PORT = config.get('serverPort')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorMiddlewere = require('./middlewere/error.middlewere')

const path = require('path');



app.use(fileUpload({}))

app.use(cors({
    origin: config.get('client_url'),
    credentials: true
}))
app.use('/files', express.static(config.get('file_path')));
app.use(cookieParser())
app.use(express.json({ extended: true,limit: '3mb' }))
app.use(express.urlencoded({ extended: true,limit: '3mb' }))
app.use('/api', router)
app.use(errorMiddlewere) //Обязательно последний!
// // Подключаем папку с билдом React-приложения
// app.use(express.static(path.join(__dirname, 'client', 'build')));
//
// // Для всех остальных запросов отдаем index.html
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
// });
const start = async () => {
    try{

        // await mailService.sendActivationMail('barahtasurgut@gmail.com','test!')
        await sequelize.authenticate()
        // await sequelize.sync({ force: true })
        console.log('connect to DB')
        app.listen(PORT,() => {
            console.log('Server started on port : ', PORT)
        })
    }catch (e){
        console.log(e)
        console.error('Unable to connect to the database:', e.message);
        console.error(e.stack);  // Вывод стека ошибки для подробного анализа
    }
}

start()