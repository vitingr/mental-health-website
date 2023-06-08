import mongoose from 'mongoose'

let isConnected = false

export const ConnectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log("MongoDB já está conectado")
        return
    }

    try {

        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'pwi',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true

        console.log("Conexão com o MongoDB realizada com sucesso!")

    } catch (error) {
        return error
    }
}