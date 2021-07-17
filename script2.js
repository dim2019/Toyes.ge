// ...............................A J A X................//
// აქ დინამიურად მაქვს შექმნილი ელემენტები ასევე დინამიურად მაქვს მინიჭებული Id-ები და Class-ები//
//გამოყენებული მაქვს XMLHttpRequest ბაზიდან მონაცემების წამოსაღებად//
// მომაქვს user-ების შესახებ ინფორმაცია კერძოდ ამ ლინკიდან "https://reqres.in/api/users?page="//
// რადგან მონაცემები გაყოფილი იყო 2 გვერდად მომიწია ფეიჯების გადასართავად გამეწერა ყილაკები 
// და შესაბამისი კოდიც რაც ბოლოში მაქვს აღწერილია


let currentPage = 1;
let totalPages;


function getUsers(page) {

    function render() {
        let response = this.responseText;
        let responseData = JSON.parse(response);

        var fragment = document.createDocumentFragment();

        responseData.data.forEach(item => {
            let li = document.createElement('li');
            li.setAttribute('class', 'listli');

            let span = document.createElement('span');
            span.textContent = item.first_name + ' ' + item.last_name;

            let img = document.createElement('img');
            img.src = item.avatar;
            img.setAttribute('alt', 'user-image');

            li.appendChild(img);
            li.appendChild(span);

            fragment.appendChild(li);
        });
        document.getElementById('list').innerHTML = ' ';
        document.getElementById('list').appendChild(fragment);

        totalPages = responseData.total_pages;
    }



    let requist = new XMLHttpRequest();
    requist.addEventListener('load', render);
    requist.open('GET', 'https://reqres.in/api/users?page=' + page);
    requist.send();

}


// ........................შემდეგი გვერდის დათვალიერება.................//
document.getElementById('prev').addEventListener('click', function() {
    if (currentPage === 1) {
        return;
    }
    currentPage -= 1;
    getUsers(currentPage);
})

document.getElementById('next').addEventListener('click', function() {
    if (currentPage === totalPages) {
        return;
    }
    currentPage += 1;
    getUsers(currentPage);
})


getUsers();