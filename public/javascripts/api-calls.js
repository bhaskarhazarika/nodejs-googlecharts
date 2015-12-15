var http=require('http');

var optionsGet={
    host:"localhost",
    port:3000,
    path:'/api/orders/getOrders?start_date=01%2F01%2F2015&end_date=12%2F01%2F2015',
    method:'GET'
};

console.info('Options prepared:');
console.log(optionsGet);
console.info('Do the GET call');


var reqGet=http.request(optionsGet,function(res){
// console.log('status Code :',req.statusCode);
    var responseData='';
    res.on('data',function(d){
        responseData+=d;
         console.log(responseData);
    });

});


reqGet.end();
reqGet.on('error', function(e) {
    console.error(e);
});



