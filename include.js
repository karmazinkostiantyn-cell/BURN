includeHTML(addActivePage);

function addActivePage() {
  const current = location.pathname.split("/").pop(); // current page
  console.log("Current page: ", current);
  const nav = document.querySelector("nav");
  const divs = nav.querySelectorAll("div"); // select all divs
  console.log("Found divs: ", divs);

  for (const div of divs) {
    const link = div.querySelector("a"); // find <a> inside this div

    const href = link.getAttribute("href");
    
    console.log("Current, href: ", "/docs/"+current, href);
    if (href === "/docs/" + current || (current === "" && href === "index.html")) {
      div.classList.add("active-page"); // add class to the div
      break; // stop after the first match
    }
  }
}

async function includeHTML(callback) {
  const promises = Array.from(document.querySelectorAll("[include-html]")).map(async (el) => {
    const file = el.getAttribute("include-html");
    const resp = await fetch(file);
    el.innerHTML = await resp.text();
  });
  
  await Promise.all(promises); // Wait for all fetches to complete
  callback(); // Now call the callback after all HTML is loaded
}