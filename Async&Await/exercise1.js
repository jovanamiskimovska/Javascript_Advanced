$(document).ready(function () {

    let table1 = $("#table1");
    let table2 = $("#table2");

    let url1 = 'https://jsonplaceholder.typicode.com/posts/1';
    let url2 = 'https://jsonplaceholder.typicode.com/users/';


    function fillTable(user) {
        table1.append(' <thead class="thead-dark"> <tr><th scope="col">User Id</th><th scope="col">Id</th><th scope="col">Title</th><th scope="col">Body</th></tr></thead></table>');
        table1.append(`<tbody><div class="row">
    <td><div class="col-md-3">${user.userID}</div></td>
    <td><div class="col-md-3">${user.id}</div></td>
    <td><div class="col-md-3">${user.title}</div></td>
    <td><div class="col-md-3">${user.body}</div></td>
</div></tbody>`);
    }



    function fillTableWithUser(user) {
        table2.append(' <thead class="thead-dark"> <tr><th scope="col">Id</th><th scope="col">Name</th><th scope="col">Username</th><th scope="col">Email</th><th scope="col">Address</th></thead></table>');

        table2.append(`<tbody><div class="row">
            <td><div class="col-md-10">${user.id}</div></td>
            <td><div class="col-md-10">${user.name}</div></td>
            <td><div class="col-md-10">${user.username}</div></td>
            <td><div class="col-md-10">${user.email}</div></td>
            <td><div class="col-md-10">${user.address.street}${user.address.city}</div></td>
        </div></tbody>`);

    }


    async function apiCall(url) {
        let result = await fetch(url);
        let resultObject = await result.json();
        console.log(resultObject);
        fillTable(resultObject);
        let resultUserId = resultObject.userId;
        let resultUser = await fetch(`${url2}${resultUserId}`);
        let userDetails = await resultUser.json();
        fillTableWithUser(userDetails);

    }

    apiCall(url1)
})