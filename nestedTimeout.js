const output = document.getElementById("timeout-output");
function printNumbers(from, to) {
    let timerId = setTimeout(function nextNumber(){
      if (from <= to){
        output.textContent += `${from}, `;
        from++;
        //clearTimeout(timerId2);
        let timerId2 = setTimeout(nextNumber, 1000);
      }
    }, 1000)
    //clearTimeout(timerId);
  }
  printNumbers(1, 5);

  // Why is timerId2 undefined? 