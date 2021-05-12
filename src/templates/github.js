import imgMe from '../assets/images/imgMe.jpg'
import imgLogoGithub from '../assets/images/logoGithub.png'

const Github = () => {
  const view = `
    <div class="Github-main">

      <a class="Main-github_img" href="https://github.com/CodeDreake">
        <img src="${imgLogoGithub}" alt="imagen logo github">
      </a>

      <div class="Main-profile">
        <img class="Profile-me_img" src="${imgMe}" alt="imagen foto David Valencia">

        <ul>
          <li>Repositorios: <span>10</span></li>
          <li>ID: <span>CodeDreake</span></li>
          <a href="https://github.com/CodeDreake"><li>GitHub</li></a>
        </ul>
      </div>

    </div>
  `;
  return view;
};

export default Github;