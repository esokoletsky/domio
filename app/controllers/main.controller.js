const fetch = require('node-fetch');

module.exports = {
    showProperties: (req, res) => {
        const properties = () => {
            fetch('https://interview.domio.io/properties/')
                .then(res => {
                    console.log(res);
                    res.json()
                })
        }
        res.render('pages/home', {
            properties: properties
        })
    }
}