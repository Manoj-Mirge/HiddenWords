 toastr.options.timeOut =3000;
 function notify_alerror() {
 	toastr.error('The word submitted by you is alredy answred', 'Already answered!');
 }

 function notify_notinword() {
    toastr.error('The word submitted by you is not present in given Word.', 'Wrong word!');	
 }

 function notify_notindict() {
 	toastr.error('The word is not valid English word.', 'Invalid word!');
 }

 function notify_rightans() {
 	toastr.success('That is correct answer.', 'Well Done :)')
 }

 export {notify_alerror,notify_notinword,notify_notindict,notify_rightans};