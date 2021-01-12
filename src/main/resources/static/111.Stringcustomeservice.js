///<reference path="D:/Kishore/programs/5.UI Technologies/2.Angular_JS/programms/111.customeservice.js"/>
///<reference path="D:/Kishore/programs/5.UI Technologies/2.Angular_JS/programms/111.customeservice.html"/>

myApp.factory('stringService', function () {
    return {
        processString: function (input) {
            if (!input) {
                return input;
            }
            var output = "";
            for (var i = 0; i < input.length; i++) {
                if (i > 0 && input[i] == input[i].toUpperCase()) {
                    output = output + " ";
                }
                output = output + input[i];

            }
            return output;
        }
    };
}); 