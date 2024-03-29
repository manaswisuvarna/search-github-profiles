const url = "https://api.github.com/users";


const searchInput = document.getElementById("searchInput");
const searchbtn = document.getElementById("searchbtn");
const profilecon = document.getElementById("profileContainer");
const loading = document.getElementById("loading");

const generateProfile = (profile) => {
    return `
    <div class="profile">

    <div class="topSec">
        <div class="left">

            <div class="avatar">
                <img src="${profile.avatar_url}"
                    alt="avatar"/>
            </div>
            <div class="self">
                <h1>${profile.name}</h1>
                <h2>@${profile.login}</h2>
            </div>


        </div>
        <div class="right">
<a href="${profile.html_url}" target="_black">
            <button id="searchbtn" class="btn">Check Profile</button>
        </a>
            </div>


    </div>

    <div class="about">
        <h2>About</h2>
        <p>${profile.bio}</p>
    </div>

    
    <div class="statusSec">
        <div class="status">
            <h3>followers</h3>
            <p>${profile.followers}</p>
        </div>
        <div class="status">
            <h3>following</h3>
            <p>${profile.following}</p>
        </div>
        <div class="status">
            <h3>repos</h3>
            <p>${profile.public_repos}</p>
        </div>
    </div>

</div>`;
}

const fetchProfile = async () => {

    const username = searchInput.value;
    loading.innerText = "loading...";
    loading.style.color = "black";


    try {
        const res = await fetch(`${url}/${username}`);
        const data = await res.json();
        console.log("data", data);

        if (data.login) {
            loading.innerText = "";
            profilecon.innerHTML = generateProfile(data);
        }
        else {
            profilecon.innerText = "";
            loading.innerHTML = data.message;
            loading.style.color = "red";
        }

    }
    catch (error) {
        console.log({ error });
        loading.innerText="";
    }
}

    ;