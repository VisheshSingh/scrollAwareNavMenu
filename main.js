const selectElementByClass = (selector) => {
  return document.getElementsByClassName(`${selector}`);
};

const sections = [
  selectElementByClass('home'),
  selectElementByClass('about'),
  selectElementByClass('services'),
  selectElementByClass('download'),
  selectElementByClass('contact'),
];

const navItems = {
  home: selectElementByClass('homeNavItem'),
  about: selectElementByClass('aboutNavItem'),
  services: selectElementByClass('servicesNavItem'),
  download: selectElementByClass('downloadNavItem'),
  contact: selectElementByClass('contactNavItemm'),
};

// intersection observer setup
const options = { root: null, rootMargin: '0px', threshold: 0.7 };

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    console.log({ entry });
    if (entry.isIntersecting) {
      const navItem = navItems[entry.target.id];
      navItem.classList.add('active');

      Object.values(navItems).forEach((item) => {
        if (item !== navItem) {
          navItem.classList.remove('active');
        }
      });
    }
  });
};

const observer = new IntersectionObserver(callback, options);
sections.forEach((sec) => observer.observe(sec));
