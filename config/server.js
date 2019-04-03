//Server COnfig
// Enviroment port variable
var serverConfig =function(){
    const port = process.env.PORT || 3000;
    return port;
    
 }

 module.exports = {
	serverConfig: serverConfig
};

