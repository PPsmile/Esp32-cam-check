const userID = document.getElementById('userID')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const age = document.getElementById('age')
const addBtn = document.getElementById('addBtn')
const updateBtn = document.getElementById('updateBtn')
const removeBtn = document.getElementById('removeBtn')

const database = firebase.database();
const rootRef = database.ref('esp32-cam')
rootRef.once('value', function(snapshot){
	console.log(snapshot.val());
    snapshot.forEach(function(element){
        document.querySelector('#picture').innerHTML += `
			<div>${element.val()}</div>
			<button class="btn btn-danger">Delete</button>`
    });
})

removeBtn.addEventListener('click', e => {
	e.preventDefault();
	firebase.database().ref('esp32-cam/photo').remove();
});





















// rootRef.orderByKey().on('value',snapshot => {
//     console.log(snapshot.val());
// });

// function gotData(data) {
//     console.log(data.val())
//     var photo = data.val();
//     var keys = Object.keys(photo);
//     console.log(keys);
//     for(var i = 0; i<keys.length;i++){
//          var k = keys[i];
//          var pic = photo[k].pic
//         document.getElementById('picture').innerHTML = k
//         console.log(photo[k]);
//     }

























// addBtn.addEventListener('click', (e)=> {
//     e.preventDefault();
//     database.ref('/users/'+userID.value).set({
//         first_name: firstName.value,
//         last_name: lastName.value,
//         age: age.value
//     });
// });

// rootRef.orderByKey().on('value',snapshot => {
//     console.log(snapshot.val());
// });

// function gotData(data) {
//     console.log(data.val())
//     var photo = data.val();
//     var keys = Object.keys(photo);
//     console.log(keys);
//     for(var i = 0; i<keys.length;i++){
//          var k = keys[i];
//          var pic = photo[k].pic
//         document.getElementById('picture').innerHTML = photo[k]
//         console.log(photo[k]);
//     }

   

    

//;}


// {
//     "rules": {
//       ".read": "now < 1608224400000",  // 2020-12-18
//       ".write": "now < 1608224400000",  // 2020-12-18
//     }
//   }