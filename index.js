function search(find) {
  let arr = [];
  const reg = new RegExp(`${find}([^\s]+)`, `gi`);
  
  //._4mn is the wrapper class name and "a" is the anchor tag to locate the profile link
  const items = document.querySelectorAll("._4mn a"); 

  items.forEach((item) => {
      let result = item.innerText.match(reg);
      if (result) {
        let obj = {
          name: "",
          link: null
        };
        obj.name = item.innerText;
        obj.link = item.href;
        arr.push(obj);
      }
    }
  );
console.log(arr);
}

search("yourCrushName"); //search here
