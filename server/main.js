const mongoose = require('mongoose');

const app = require('./app');

mongoose.connect('URL', {
    useNewUrlParser: true
});

app.listen(process.env.PORT || 3000);
