
 /*

  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'returns'];

  getElementById -> Look for id of columnSelector
  
  iterate over letters and populate columnSelector with <option value="currentItem">currentItem</option>
  letter.map((currentItem) => {
    <option value={currentItem}>{currentItem}</option>
  });
 */
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'returns'];
let columnSelector = <option value="currentItem">currentItem</option>;
<option value="currentItem">currentItem</option>
letters.map((currentItem)=>{
  <option value={currentItem}>{currentItem}</option>
});

var element = document.getElementById("columnSelector");
