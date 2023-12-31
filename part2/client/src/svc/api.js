const apiAddress = "http://localhost:5045"
export default {
    sendMessage: async (messageText, parentId) => {
        const parent = parentId ?? null
        const body = {
            id: Date.now(),
            text: messageText,
            parentId: parent
        }
        await axios.post(`${apiAddress}/messages`, body)

    },
    getMessages: async () => {
        const response = await axios.get(`${apiAddress}/messages`)
        return response.data;
    }
}