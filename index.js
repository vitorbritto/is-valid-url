/*!
 * Copyright 2015, All Rights Reserved.
 *
 * Code licensed under the MIT License:
 * http://vitorbritto.mit-license.org/
 *
 * Author: Vitor Britto <code@vitorbritto.com.br>
 */


(function(window, document, undefined) {

    'use strict';

    var isValid = (function() {

        var validate = validate || {};

        // VALIDATE METHOD
        validate.inputUrl = function(url) {
            var urlPattern = /^((https?|ftp):\/\/|(www|ftp)\.)[a-z0-9-]+(\.[a-z0-9-]+)+([\/?].*)?$/;
            return urlPattern.test(url);
        };

        // INITIALIZE MODULE
        return {
            url: validate.inputUrl
        };

    })();

    // Global
    window.isValid = isValid;

})(window, document);

