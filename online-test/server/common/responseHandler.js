'use strict';

module.exports = function(req, res, next){
	res.mStatusCode = 200;
	res.mSend = function() {
        var response = {};
        response.status = this.mStatusCode;
        if(this.mResult)
            response.result = this.mResult;
        if(this.mError)
            response.error = this.mError;              
        this.status(this.mStatusCode)
			.send(response);
	};
	res.mSendError = function(error) {
		this.mStatusCode = 404;
		this.mError = error.message;
        this.mSend();
	};
	res.mSendResults= function(result) {
		this.mResult = result;
        this.mSend();
	};
	next();
};