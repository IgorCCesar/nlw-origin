const linksSocialMedia = {
  youtube: "IgorCCesar",
  facebook: "IgorCCesar",
  instagram: "igorcesar9",
  twitter: "IgorCCesar"
}

function changeSocialMediaLinks() {
  userName.textContent = 'Igor Cesar'
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()
