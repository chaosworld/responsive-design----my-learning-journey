function delay(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}
function getRandomImageURL(width, height) {
  return `https://source.unsplash.com/collection/928423/${width}x${height}?random=${Math.floor(
    Math.random() * 100
  )}`;
  // https://picsum.photos/seed/picsum/${width}/${height}?random=${Math.random()}
}

console.log(getRandomImageURL(300, 400));

const mainEl = document.getElementById("main");

function getPostsHTML(postNum) {
  let postsContainerHTML = "";
  for (let i = 0; i < postNum; i++) {
    postsContainerHTML += `
    <div class="post">
      <img src="${getRandomImageURL(400, 300)}" class="post-img" />
      <p class="post-date">JULY 23, 2022</p>
      <h2 class="post-title">
        Blog #${i + 1}
      </h2>
      <p class="post-intro">
        I'm excited to start a new learning journey as a Scrimba 
        Bootcamp student! After several months of learning in the 
        Frontend Developer Career Path.
      </p>
    </div>
    `;
  }
  postsContainerHTML = `
  <div class="posts-container">
    ${postsContainerHTML}
   </div>
  `;
  return postsContainerHTML;
}

function getMainHeroHTML() {
  let mainHeroHTML = "";
  mainHeroHTML += `
    <div class="main-hero">
      <img 
        class="main-hero-img" 
        src="images/blog-image-hero.png" 
        alt="main-hero image" 
      />
      <div class="main-hero-content">
        <p class="main-hero-date">JULY 23, 2022</p>
        <h2 class="main-hero-title" id="main-hero-title">
          My new journey as a bootcamp student.
        </h2>
        <p class="main-hero-intro">
          After several months of learning in the Frontend Developer Career Path, 
          I've made the big jump over to the Bootcamp to get expert code reviews 
          of my Solo Projects projects and meet like-minded peers.
        </p>
      </div>
    </div>
  `;
  return mainHeroHTML;
}

function getBlogPostHTML() {
  let blogPostHTML = "";
  blogPostHTML += `
    <div class="blog-post">
      <p class="blog-post-date post-date">JULY 23, 2022</p>
      <h1 class="blog-post-title">My new journey as a bootcamp student.</h1>

      <p>After several months of learning in the Frontend Developer Career Path,
       I've made the big jump over to the Bootcamp to get expert code reviews of
        my Solo Projects projects and meet like-minded peers.
      </p>
      <img class="main-hero-img blog-post-img" 
           src="images/blog-image-hero.png" 
           alt="blog-post-img" />
      <h2>How I stay committed to learning</h2>

      <p>I like to think of myself as a lifelong learner. I used to spend hours
       and hours learning, then try to create simple projects using what I 
       learned or work new techniques into existing projects.
      </p>
      
      <p>While that was fun, I felt like it would be helpful to share what I 
        was learning and most things about my journey with the world.
      </p>
      
      <h2>How I got started</h2>
      
      <p>I started simple and gradually grew my learning journal site. I would take
       notes about what I was learning. After each learning session, I'd use my 
       notes to not only reflect on what I learned but also write short summaries
        of what I learned using my own words.
      </p>
      
      <p>That helped me grok what I was learning, and I realized that posting my
       learning summaries was also helping others learn and stay motivated.
      </p>


    </div>
  `;
  return blogPostHTML;
}

function getAboutMePageHTML() {
  let aboutMeHTML = "";
  aboutMeHTML += `
    <div class="about-me-page">
      <div class="about-me-header">
        <img class="about-me-img" 
          src="images/about-me.png" 
          alt="about me image" 
        />
        <div class="about-me-header-info">
          <h1 class="about-me-title">
            Hi there! My name is Roku and welcome to my learning journal.
          </h1>
          <p>
            After several months of learning in the Frontend Developer Career Path, 
            I've made the big jump over to the Bootcamp to get expert code reviews 
            of my Solo Projects projects and meet like-minded peers.
          </p>
        </div>
      </div>

      <h2>How I stay committed to learning</h2>

      <p>I like to think of myself as a lifelong learner. I used to spend hours
       and hours learning, then try to create simple projects using what I 
       learned or work new techniques into existing projects.
      </p>
      
      <p>While that was fun, I felt like it would be helpful to share what I 
        was learning and most things about my journey with the world.
      </p>
      
      <h2>How I got started</h2>
      
      <p>I started simple and gradually grew my learning journal site. I would take
       notes about what I was learning. After each learning session, I'd use my 
       notes to not only reflect on what I learned but also write short summaries
        of what I learned using my own words.
      </p>
      
      <p>That helped me grok what I was learning, and I realized that posting my
       learning summaries was also helping others learn and stay motivated.
      </p>
    </div>
  `;
  return aboutMeHTML;
}

function showHomePage() {
  let mainHTML = "";
  let mainHeroHTML = "";
  let mainContentHTML = "";
  mainHeroHTML = getMainHeroHTML();

  mainContentHTML = `
    <div class="main-content" data-main-content-type="home">
      ${getPostsHTML(6)}
    </div>
  `;
  mainHTML += mainHeroHTML;
  mainHTML += mainContentHTML;
  mainEl.innerHTML = mainHTML;
}

function showBlogPostPage() {
  mainEl.innerHTML = `
  <div class="main-content" data-main-content-type="blog-post">
    ${getBlogPostHTML()}
    <div class="recent-posts">
      <h2>Recent posts</h2>
      ${getPostsHTML(3)}
    </div>
  </div>
  `;
}

function showAboutMePage() {
  mainEl.innerHTML = `
  <div class="main-content" data-main-content-type="about-me">
    ${getAboutMePageHTML()}
    <div class="recent-posts">
      <h2>Recent posts</h2>
      ${getPostsHTML(3)}
    </div>
  </div>
  `;
}

document.addEventListener("click", function (e) {
  // console.log(e.target);
  const mainContentEl = document.querySelector(".main-content");

  if (e.target.parentNode.id && e.target.parentNode.id === "site-title") {
    mainContentEl.dataset.mainContentType !== "home" && showHomePage();
    return;
  }
  if (!e.target.id) {
    return;
  }
  console.log(`main-content-type: ${mainContentEl.dataset.mainContentType}`);
  const id = e.target.id;
  if (id === "nav-home") {
    mainContentEl.dataset.mainContentType !== "home" && showHomePage();
  } else if (id === "nav-about-me") {
    mainContentEl.dataset.mainContentType !== "about-me" && showAboutMePage();
  } else if (id === "main-hero-title") {
    showBlogPostPage();
  } else {
    console.log(`no action taken for id=${id}`);
  }
});

showHomePage();
