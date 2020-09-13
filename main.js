const selectElementByClass = (selector) => {
  return document.querySelector(`.${selector}`);
};

const sections = [
  selectElementByClass('home'),
  selectElementByClass('about'),
  selectElementByClass('services'),
  selectElementByClass('downloads'),
  selectElementByClass('contact'),
];

const navItems = {
  home: selectElementByClass('homeNavItem'),
  about: selectElementByClass('aboutNavItem'),
  services: selectElementByClass('servicesNavItem'),
  downloads: selectElementByClass('downloadsNavItem'),
  contact: selectElementByClass('contactNavItem'),
};

// intersection observer setup
const options = { root: null, rootMargin: '0px', threshold: 0.7 };

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const navItem = navItems[entry.target.id];
      console.log(navItem);
      navItem.classList.add('active');

      Object.values(navItems).forEach((item) => {
        if (item != navItem) {
          item.classList.remove('active');
        }
      });
    }
  });
};

const observer = new IntersectionObserver(callback, options);
sections.forEach((sec) => observer.observe(sec));
