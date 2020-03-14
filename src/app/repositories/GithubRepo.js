import styles from './style.scss'

export class GitHubRepo {
  constructor({ name, stars, license, url, description, descriptionUrl }) {
    this.name = name;
    this.stars = stars;
    this.license = license;
    this.url = url;
    this.description = description;
    this.descriptionUrl = descriptionUrl;
  }

  get starsInfo() {
    return this.stars > 0 ? `(${this.stars} ✨)` : '';
  }

  get repoDescription() {
    if( !(this.description || this.descriptionUrl) ) {
      return ''
    }
    const description =  document.createElement('small')
    description.classList.add(styles.repoDescription)
    description.innerText = this.description
    if(this.descriptionUrl) {
      const link = document.createElement('a')
      link.href = this.descriptionUrl
      link.innerText = this.descriptionUrl
      description.append(document.createElement('br'))
      description.append(link)
    }
    return description.outerHTML
  }

  toListElements() {
    return (`
    <li class="${styles.reposListItem}">
        <a href="${this.url}">${this.name}${this.starsInfo}</a><br>
        ${this.repoDescription}
    </li>
    `);
  }
}
