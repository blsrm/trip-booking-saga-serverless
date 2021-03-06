'use strict';

module.exports.handler = (req, res, callback) => {

  console.log(req);
  console.log(req.body);
  const body = JSON.parse(req.body);
  
  let responseBody;
  
  if (body.bookCarFailure && body.bookCarFailure==='true') {
    console.log('simulated failure to book a car');
    responseBody = JSON.stringify({
      success: false,
      carMessage: 'Car booking went wrong because we wanted it to fail'
    });
  } else {
    console.log('booked a car');    
    responseBody = JSON.stringify({
      success: true,
      carMessage: 'Car booking successful'
    });
  }
  callback(null, {
    statusCode: 200,
    body: responseBody
  });
  
};
