(function () {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this.toString();
        }

        return str + this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        }

        return this.toString() + str;
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;
    };

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }

        if (n < 4) {
            return '.'.repeat(n);
        }

        if (this.includes(' ')) {
            let lastSpaceIndex = this.lastIndexOf(' ', n - 3);

            if (lastSpaceIndex === -1) {
                return this.slice(0, n - 3) + '...';
            } else {
                return this.slice(0, lastSpaceIndex) + '...';
            }
        } else {
            return this.slice(0, n - 3) + '...';
        }
    };

    String.format = function (str, ...params) {
        let stringToReturn = str.slice();

        for (let i = 0; i < params.length; i++) {
            stringToReturn = stringToReturn.replace(/{\d+}/, params[i]);
        };
        return stringToReturn;
    };
})();