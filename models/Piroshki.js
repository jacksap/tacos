const piroshkiModel = {
    data: [
        {
            name: 'Pink Surprise',
            filling: 'Raspberry',
            size: 4
        },
        {
            name: 'Best Blue',
            filling: 'Blueberry',
            size: 6
        },

    ],
    addPiroshki: function(name, filling, size) {
        let newPiroshki = {
            name: name,
            filling: filling,
            size: size
        };
        this.data.push(newPiroshki)
    },
    getAllPiroshkis: function() {
        return this.data;
    },
    getPiroshki: function(id) {
        return this.data[id];
    },
    updatePiroshki: function(id, name, filling, size){
        let piroshki = {
            name,
            filling,
            size
        };
        this.data[id] = piroshki;
    },
    deletePiroshki: function(id) {
        this.data.splice(id, 1);
    },
};

module.exports = piroshkiModel;