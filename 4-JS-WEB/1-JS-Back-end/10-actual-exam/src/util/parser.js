function parseError(error) {
    console.log('Mongoose error occurred');
    if (error.name === 'ValidationError') {
        return Object.values(error.errors).map(err => err.message);
    } else {
        console.log('Custom error occurred');
        return error.message.split('\n');
    }
}

module.exports = { parseError };