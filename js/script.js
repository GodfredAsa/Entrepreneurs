var users = [
    {
        name: 'Kwame',
        age:30,
        gender: 'M',
        hobby: 'pets',
        avatar: 'kwame.jpg'
    },
    {
        name: 'Angela',
        age:22,
        gender: 'F',
        hobby: 'pets',
        avatar: 'angela.jpg'
    },
    {
        name: 'Mylove',
        age:22,
        gender: 'F',
        hobby: 'music',
        avatar: 'mylove.jpg'
    },
    {
        name: 'Nissa',
        age:20,
        gender: 'F',
        hobby: 'Shopping',
        avatar: 'nissa.jpg'
    },
    {
        name: 'Redsa',
        age:25,
        gender: 'F',
        hobby: 'Swimming',
        avatar: 'redsa.png'
    },
    {
        name: 'Ajah',
        age:19,
        gender: 'M',
        hobby: 'Sport',
        avatar: 'ajah.jpg'
    },
    {
        name: 'Beauty',
        age:29,
        gender: 'F',
        hobby: 'pets',
        avatar: 'beauty.jpg'
    },
	
	  {
        name: 'Kizza',
        age:29,
        gender: 'F',
        hobby: 'pets',
        avatar: 'kizza.jpg'
    },
	
    {
        name: 'Lim',
        age:19,
        gender: 'F',
        hobby: 'Party',
        avatar: 'lim.png'
    },
];

window.addEventListener('load',function () {
    var searchBtn = document.getElementById('searchBtn');
    var results = document.getElementById('results');
    searchBtn.addEventListener('click',function () {
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;

        var genderField = document.getElementById('gender');
        var genderIndex = genderField.selectedIndex;
        var gender = genderField.options[genderIndex].value;

        var minAgeField = document.getElementById('minAge');
        var maxAgeField = document.getElementById('maxAge');
        var minAge = minAgeField.value;
        var maxAge = maxAgeField.value;

       

        if(maxAge < minAge && maxAge && minAge){
            alert("Maximum Age should be greater than minimum age.");

            console.log(minAge);
            console.log(maxAge);
        }else{
            var resultHtml = '';

            for (let i = 0; i < users.length; i++) {

                if(gender == 'A' || gender == users[i].gender){
                    if(hobby == '' || hobby == users[i].hobby){
                        if( minAge && users[i].age >= minAge && !maxAge){

                            resultHtml += `
                            <div class="person-row">
                            <img src="img/${users[i].avatar}" alt="${users[i].name}">
                            <div id="person-info">
                                <div><h3>${users[i].name}</h3></div>
                                <div>${users[i].age}</div>
                                <div>${users[i].hobby}</div>
                            </div>
                            <button>Add as friend</button>
                        </div>
                            
                            `;
                            

                        }else if(!minAge && maxAge &&   users[i].age <= maxAge){
                            resultHtml += `
                            <div class="person-row">
                            <img src="img/${users[i].avatar}" alt="${users[i].name}">
                            <div id="person-info">
                                <div><h3>${users[i].name}</h3></div>
                                <div>${users[i].age}</div>
                                <div>${users[i].hobby}</div>
                            </div>
                            <button>Add as friend</button>
                        </div>
                            
                            `;
                        
                        }else if( minAge && maxAge && users[i].age >= minAge && users[i].age <= maxAge){
                            resultHtml += `
                            <div class="person-row">
                            <img src="img/${users[i].avatar}" alt="${users[i].name}">
                            <div id="person-info">
                                <div><h3>${users[i].name}</h3></div>
                                <div>${users[i].age}</div>
                                <div>${users[i].hobby}</div>
                            </div>
                            <button>Add as friend</button>
                        </div>
                            
                            `;
                              
                        }else if(!maxAge && !minAge){
                            resultHtml += `
                            <div class="person-row">
                            <img src="img/${users[i].avatar}" alt="${users[i].name}">
                            <div id="person-info">
                                <div><h3>${users[i].name}</h3></div>
                                <div>${users[i].age}</div>
                                <div>${users[i].hobby}</div>
                            </div>
                            <button>Add as Friend</button>
                        </div>
                            
                            `;
                            
                        }
                       
                    }
                }   
            
            }

            results.innerHTML = resultHtml;
        }      
     
    });
});