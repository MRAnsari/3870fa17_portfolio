var today = new Date();
var hourNow = today.getHours();

  console.log(today);
  console.log(hourNow);

var logoshift;

if (hourNow > 18)
    { logoshift = '<img src="images/logo_night.png">'; }
  else if (hourNow > 12)
    { logoshift = '<img src="images/logo_night.png">'; }
  else if (hourNow > 0)
    { logoshift = '<img src="images/logo_day.png">'; }
  else
    { logoshift = '<img src="images/logo_day.png">'; }
