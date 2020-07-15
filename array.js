var friendAge=[21,22,24,25,26,27,28,29];
console.log(friendAge);
console.log(friendAge[4]);
console.log(friendAge[6]);

var sonalidin=friendAge[3];
console.log(sonalidin);

var position=friendAge.indexOf(22);
console.log(position);

 friendAge[2]=30;
 console.log(friendAge[2]);

 friendAge.push(44);
 console.log(friendAge.length);
 friendAge.push(33);
 friendAge.push(66);
 console.log(friendAge);
 console.log(friendAge.length);

 friendAge.pop();
 console.log(friendAge);


 var names=['kalam','malam','jalam','talam','nalam','zalam','neram'];
 console.log(names);
 
 names.shift();
 console.log(names);

 names.unshift('hasan');
 console.log(names);

 var part=names.slice(2,5);
 console.log(part);
 console.log(names);

