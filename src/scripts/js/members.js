// Fetch GitHub Org public members list

const memberData = [
  {
      login: "Abir-Tx",
      role: "Lead Developer"
  },
  {
      login: "killerclaws12",
      role: "CEO"
  },
  {
      login: "phyouthcenter1",
      role: "Developer"
  },
  {
      login: "TyEggers",
      role: "Developer"
  },
  {
      login: "virtual-designer",
      role: "Developer"
  },
  {
      login: "elbayxsv",
      role: "Developer"
  }
];

const colors = { "CEO": "text-bg-primary", "Developer": "text-bg-danger", "Lead Developer": 'text-bg-success' };

const findRole = login => {
  for (const member of memberData) {
    if (member.login === login) {
      return member.role;
    }
  }

  return null;
};

const findColor = role => {
  for (const r in colors) {
    if (role === r) {
      return colors[r];
    }
  }

  return null;
};

const orgName = "GhostyORG";

// Fetch the data
export function membersFetch() {  
  fetch("https://api.github.com/orgs/" + orgName + "/members")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      var memAvatar = document.getElementById("members");
      var devName = document.getElementById("devName");
      var devLink = document.getElementById("devLink");
      const devRole = document.getElementById("devRole");

      // Add for the first elem
      memAvatar.src = data[0]["avatar_url"];
      devName.textContent = data[0]["login"];
      devLink.href = data[0]["html_url"];

      const role = findRole(data[0]["login"]);
      devRole.textContent = role;
      console.log(0, role, findColor(role));
      devRole.classList.add(findColor(role));

      for (var i = 1; i <= Object.keys(data).length - 1; i++) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("col-lg-4");
        newDiv.classList.add("col-sm-12");
        newDiv.classList.add("col-md-6");

        var devCard = document.getElementById("devCard");
        var clonedDiv = devCard.cloneNode(true);
        // Append the elems to the DOM
        newDiv.appendChild(clonedDiv);
        document.getElementById("cardsHolder").appendChild(newDiv);

        // Image
        memAvatar.id = "memImage" + i;
        var newMemberAvatar = document.getElementById("memImage" + i);
        newMemberAvatar.src = data[i]["avatar_url"];

        // Dev Name
        devName.id = "devName" + i;
        var newDevName = document.getElementById("devName" + i);
        newDevName.textContent = data[i]["login"];

        //Github profile link
        devLink.id = "devLink" + i;
        var newDevLink = document.getElementById("devLink" + i);
        newDevLink.href = data[i]["html_url"];

        // Dev Role
        devRole.id = "devRole" + i;
        const newDevRole = document.getElementById("devRole" + i);
        const role = findRole(data[i]["login"]);
        newDevRole.textContent = role;
        const color = findColor(role);
        console.log(i, role, color);
        newDevRole.classList.remove(...Object.values(colors));
        newDevRole.classList.add(color);
      }
    })
    .catch((err) => console.error(err));
}
