export const  config  = () =>({
    mongodb:process.env.MONGO_URI,
    KEY : process.env.SECRET_KEY,
    IV : process.env.IV_KEY,
    SALT_ROUNDS: process.env.SALT_ROUNDS
})