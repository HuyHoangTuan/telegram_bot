globalThis.BOT_COUNTER = {
    currentId: 0,
    getNextId: function() {
        return ++this.currentId;
    }
}