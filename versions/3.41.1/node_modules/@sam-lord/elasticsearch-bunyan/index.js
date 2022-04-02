const { Client } = require('@elastic/elasticsearch')

class ElasticSearch {
    constructor(config, index) {
        this.client = new Client(config)
        this.index = index
    }

    async write(data) {
        if (typeof data !== 'object') {
            throw new Error('Type Error: ElasticSearch transport requires log data to be an object')
        }

        await this.client.index({
            index: this.index,
            body: data
        })
    }
}

module.exports = ElasticSearch