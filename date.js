// const start=Date.now();
// console.log(start);

// const time = 1711263456789;
// const date = new Date(time);
// console.log(date)
// console.log(Date.parse(date));

// const Date1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5)); //year, month, day, hour, minute, second
// console.log(Date1)

// const date2= new Date("August 19, 1975 23:15:30");
// console.log(date2.getDate())

// const date3= new Date("August 19, 1975 23:15:30");
// console.log(date3.getDay())

// const date4= new Date("August 19, 1975 23:15:30");
// console.log(date4.getFullYear())

// const date5= new Date("August 19, 1975 23:15:30");
// console.log(date5.getHours())

// const date6= new Date("January 19, 1975 23:15:30.460");
// console.log(date6.getMilliseconds());
// console.log(date6.getMinutes());
// console.log(date6.getMonth());
// console.log(date6.getSeconds());
// console.log(date6.getTime());//It shows how many milliseconds have passed
// console.log(date6.getTimezoneOffset());//It returns the difference (in minutes) between:UTC time and local system time

// const date7 = new Date("December 31, 1975, 23:15:30 GMT-11:00");
// console.log(date7.getUTCDate());//date in UTC 
// console.log(date7.getUTCDay());//day in UTC 0-6 sunday-saturday
// console.log(date7.getUTCFullYear());
// console.log(date7.getUTCHours());
// console.log(date7.getUTCMilliseconds());
// console.log(date7.getUTCMinutes());
// console.log(date7.getUTCMonth());
// console.log(date7.getUTCSeconds());
// date7.setDate(9);
// console.log(date7.getDate());


// const d = new Date("January 19, 1975 23:15:30.460");
// d.setFullYear(2020);
// d.setMonth(5);          
// d.setDate(15);
// d.setHours(10);
// d.setMinutes(30);
// d.setSeconds(45);
// d.setMilliseconds(500);
// console.log(d);
// console.log(d.getHours());

// d.setUTCFullYear(2022);        
// d.setUTCDate(1);
// d.setUTCHours(5);
// d.setUTCMinutes(20);
// d.setUTCSeconds(10);
// d.setUTCMilliseconds(250);
// console.log(d);

// console.log(d.toDateString());//shows only the date part (no time only date)
// console.log(d.toTimeString());// shows only the time part + timezone
// console.log(d.toString());//shows date and time + timezone

// console.log(d.toUTCString());//date tu UTC string
// console.log(d.toISOString());//returns iso format
// console.log(d.toJSON());//return iso format

// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());
// console.log(d.toLocaleString());

// console.log(d.valueOf()); //milliseconds from 1970 to the given year
// console.log(d[Symbol.toPrimitive]("number"));//milliseconds from 1970 to the given year, (string)//shows date and time + timezone
