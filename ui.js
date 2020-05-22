class UI {
    constructor() {
        this.profileContainer = document.querySelector('#profileContainer');
        this.alert = document.querySelector('#alert');
    }

    showProfile(profile) {
        this.profileContainer.innerHTML = `
            <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">
                        <a href="">
                            <img src="https://via.placeholder.com/350x150" class="img-thumbnail" alt="profile-photo">
                        </a>
                    </div>
                    <div class="col-md-9">
                        <h4>Contact</h4>
                        <ul class="list-group">
                            <li class="list-group-item bg-warning">
                                name : ${profile.name}
                            </li>
                            <li class="list-group-item bg-warning">
                                username : ${profile.username}
                            </li>
                            <li class="list-group-item bg-warning">
                                adress :
                                ${profile.address.street}
                                ${profile.address.city}
                                ${profile.address.zipcode}
                                ${profile.address.suite}
                            </li>
                            <li class="list-group-item bg-warning">
                                phone : ${profile.phone}
                            </li>
                            <li class="list-group-item bg-warning">
                                website : ${profile.website}
                            </li>
                            <li class="list-group-item bg-warning">
                                company : ${profile.company.name}
                            </li>
                        </ul>
                        <h4 class="mt-5">Todo List</h4>
                        <ul id="todo" class="list-group">

                        </ul>
                    </div>
                </div>
            </div>
        `
    }

    showAlert(username) {
        this.alert.innerHTML = `There is no user wtih the name ${username}`;
    }

    clear() {
        this.profileContainer.innerHTML = "";
        this.alert.innerHTML = "";
    }

    showTodo(todo) {
        let html = "";

        todo.forEach(item => {
            if (item.completed) {
                html += `
                    <li class="list-group-item bg-success">
                        ${item.title}
                    </li>
                `;
            } else {
                html += `
                    <li class="list-group-item bg-secondary">
                        ${item.title}
                    </li>
                `;
            }
        });

        this.profileContainer.querySelector('#todo').innerHTML = html;
    }
}