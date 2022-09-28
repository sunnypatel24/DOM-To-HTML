//let DOM = new XMLSerializer().serializeToString(document);
//console.log(DOM);

//let parser = new DOMParser().parseFromString(DOM);

let url = window.location.href;
console.log(url);
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", url, false);
xmlhttp.send();
let DOM = xmlhttp.responseText;
console.log(DOM);
chrome.pageCapture.saveAsMHTML({ tabId: 1 }, function () {
  let f = new File([DOM], "DOM.html", { type: "text/html" });

  let a = document.createElement("a");
  //a.href = window.URL.createObjectURL(new Blob([DOM], { type: "text/html" }));
  a.href = window.URL.createObjectURL(f);
  a.download = "DOM.html";
  a.textContent = "Download here";
  document.body.appendChild(a);
  // document.querySelector('body').append(a);
  a.click();
  document.body.removeChild(a);
});
//console.log(url);

// const a = document.createElement('a')
// a.href = url
// a.download = url.split('/').pop()
// document.body.appendChild(a)
// a.click()
// document.body.removeChild(a)

// var el = document.getElementById('btn');
// if(el){
//   el.addEventListener('click', download("http://test.html"), false);
// }

// function download(file) {
//     //creating an invisible element

//     var element = document.createElement("a");
//     element.setAttribute(
//       "href",
//       window.URL.createObjectURL(new Blob([DOM], { type: "text/html" }))
//     );
//     element.setAttribute("download", file);

//     // Above code is equivalent to
//     // <a href="path of file" download="file name">

//     document.body.appendChild(element);

//     //onClick property
//     element.click();

//     document.body.removeChild(element);
//   }

// // Start file download.
// document.getElementById("btn").addEventListener(
//   "click",
//   function () {
//     // Generate download of hello.txt
//     // file with some content
//     // var text = document.getElementById("text").value;
//     var filename = "test.html";

//     download(filename);
//   },
//   false
// );

// xmlhttp = new XMLHttpRequest();
// xmlhttp.open("GET", url, false);
// xmlhttp.send();
// //console.log(xmlhttp.responseText);
// let f = new File([DOM], "DOM.html", { type: "text/html" });

// let a = document.createElement("a");
// //a.href = window.URL.createObjectURL(new Blob([DOM], { type: "text/html" }));
// a.href = window.URL.createObjectURL(f);
// a.download = "demo.html";
// a.textContent = "Download here";
// document.body.appendChild(a);
// // document.querySelector('body').append(a);
// a.click();
// document.body.removeChild(a);

// let a = document.createElement('a');
// a.href = url;
// a.download = f.name;
// a.textContent = `Download ${f.name}`;
// document.querySelector('body').append(a);

//parser=new DOMParser();
//console.log(parser.parseFromString(xmlhttp.responseText,"text/html"));
