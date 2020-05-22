const profile = new Profile();
const ui = new UI();

const searchProfile = document.querySelector('#searchProfile');

searchProfile.addEventListener('keyup', (e) => {
    ui.clear();
    let username = e.target.value;

    if (username !== '') {
        profile.getProfile(username)
            .then((res) => {
                if (res.profile.length === 0) {
                    ui.showAlert(username);
                } else {
                    ui.showProfile(res.profile[0]);
                    ui.showTodo(res.todo);
                }
            })
            .catch(err => ui.showAlert(username));
    }
})