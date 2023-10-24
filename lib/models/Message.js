const MessageSchema = new mongoose.Schema({
    email: String,
    password: String,
    confirmPassword: String,
})

module.exports = mongoose.models.Message || mongoose.model("Message", MessageSchema)