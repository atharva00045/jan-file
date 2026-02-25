// <!-- <p class="msg">Hello</p>
// <p class="msg">Hi</p>
// <script>
// let el = document.querySelector(".msg");
// el.style.color = "red";
// </script> -->
 
 
 
//  <!-- <p class="text">One</p>
// <p class="text">Two</p>
// <script>
// let items = document.querySelectorAll(".text");
// items.forEach(item => {
//   item.style.color = "blue";
// });
// </script>  -->
 
 
 
// <!-- <i id="p1">Hello</i>
// <script>
// document.getElementById("p1").innerText = "Welcome";
// </script> -->
 
 
// <!--
// <p id="p2">Hello <span style="display:none">Hi</span></p>
// <script>
// console.log(document.getElementById("p2").textContent);
// </script> -->
 
 
// <!--
// <div id="box"></div>
// <script>
// document.getElementById("box").innerHTML = "<b>Hello</b> World";
// </script> -->
 
 
//  <!-- <p id="demo">Hello World</p>
// <button onclick="changeInnerText()">Click</button>
// <script>
// function changeInnerText() {
//   document.getElementById("demo").innerText = "InnerText Changed";
// }
// </script> -->
 
 
 
 
//<!-- <p id="demo3">
  ///Hello
  //<span style="display:none">Hidden Text</span>
//</p>
//<button onclick="showTextContent()">Click</button>
 
//<script>
//function showTextContent() {
 // alert(document.getElementById("demo3").textContent);
//}
//</script>  -->
 
 
// write down this all code of dom.
 
async function demo() {

  console.log("Start");
 
  const message = await Promise.resolve("await work");
 
  console.log(message);
 
  console.log("End");

}
 
demo();
 
 
 
 
async function demo() {

  console.log("start");
 
  await new Promise(resolve => {

    setTimeout(() => {

      console.log("await use");

      resolve();

    }, 2000);

  });
 
  console.log("end");

}
 
demo();

 
// also async await.
 