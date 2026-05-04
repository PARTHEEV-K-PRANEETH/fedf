const UserAPI = {
    fetchUsers: async function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = true;
                if (success) {
                    resolve([
                        { id: 1, name: "laxmi", email: "laxmi@gmail.com" },
                        { id: 2, name: "kanth", email: "kanth@gmail.com" },
                        { id: 3, name: "partheev", email: "partheev@gmail.com" },
                        { id: 4, name: "praneeth", email: "praneeth@gmail.com" },
                        { id: 5, name: "Krishna", email: "krishna@gmail.com" },
                        { id: 6, name: "radha", email: "radha@gmail.com" },
                        { id: 7, name: "shanthi", email: "shanthi@gmail.com" },
                        { id: 8, name: "swroop", email: "swroop@gmail.com" },
                        { id: 9, name: "sathvik", email: "sathvik@gmail.com" },
                        { id: 10, name: "vivek", email: "vivek@gmail.com" },
                    ]);
                } else {
                    reject("Failed to fetch users");
                }
            }, 2000);
        });
    }
};
// UI Layer
const UI = {
    displayUsers(users) {
        const userList = document.getElementById("userList");
        userList.innerHTML = "";
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
        });
    }
};
// Controller Layer
async function loadUsers() {
    try {
        console.log("Loading users...");
        const users = await UserAPI.fetchUsers();
        UI.displayUsers(users);
        console.log("Users loaded successfully");
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
    }
}

