// <<<<<<< Counter
const textfield = document.getElementById('content');
const letters = document.getElementById('cuntLtr');
const words = document.getElementById('Wordc');
const Letter = document.getElementById("table");
function countwords() {
    Letter.innerHTML = `<th>
    <tr >
    <th scope="row" >Sr#</th>
    <th scope="row" >Letter</th>
    <th scope="col">Count</th>
    </tr>
    </th>
    `;

    let letter = textfield.value.length;
    letters.innerHTML = letter;
    var text = textfield.value;
    text = text.trim();
    let word = text.split(" ");
    if (word[0] === "") {
        words.innerText = 0;
    }
    else {
        words.innerText = word.length;
    }
    // Convert the string to lowercase letters:
    var all = "abcdefghijklmnopqrstuvwxyz"; // all = abcdefghijkl
    var str = text.toLowerCase(); //textfield text


    var counterForTR = 1;
    //  i = 0 at start time lengtfh all = 26-1
    for (var i = 0; i < all.length; i++) {
        // Return the first character of a string:
        var char = all.charAt(i);
        // index = 1 and char = 'a' at first time
        var index = char.length;
        // a = 0 if string dose not match with all char 'a' 
        var a = str.split(char).length - 1;
        // a = 1 if string match with 'a'
        if (a > 0) {
            // counterForTR = 2
            const serialNumber = counterForTR++;
            const character = char;
            const characterCount = a;
            Letter.innerHTML += `<tr>
    <td> ${serialNumber}</td>
    <td> ${character}</td>
    <td> ${characterCount}</td>
     </tr>
    `;
            // =======
            // Set a Function for Every Key Strok
            document.getElementById("content").addEventListener("keyup", everyKeyStrok);

            // key stroke functiion

            function everyKeyStrok() {

                // take the content from text areaz
                var content = document.getElementById("content").value
                // console.log(content)

                // set Totat Leters 
                setTotalLetters(content);

                // set Totat Words 
                setTotalWords(content)

                // set recod in Data table 
                setDataTable(content)

            }

            // For Count Letters  it take string  which came from text area through key stroke function
            function setTotalLetters(content) {
                document.getElementById("totalLetters").innerHTML = content.length;
            }

            // For Count Words  it take string  which came from text area through key stroke function
            function setTotalWords(content) {
                let countWords = content.split(" ");
                document.getElementById("totalWords").innerHTML = countWords.length;
            }

            // For Setting up the Data table it take string  which came from text area through key stroke function
            function setDataTable(content) {
                let letterArr = []

                for (let index = 0; index < content.length; index++) {

                    // letterArr[content[index]] ? letterArr[content[index]]+=1:letterArr[content[index]]=1;
                    const ch = letterArr.findIndex((row) => {
                        return row.letter == content[index]
                    });
                    if (ch < 0) {
                        letterArr.push({ letter: content[index], count: 1 })
                    }
                    else {
                        letterArr[ch].count++
                        // >>>>>>> local
                    }
                }

            }
        }
    }
}