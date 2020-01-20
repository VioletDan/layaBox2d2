class com {
    constructor() {

    }

    trim(str = '') {
        return str.replace(/(^\s*)|(\s*$)/g, "");
    }
}

module.exports = new com()