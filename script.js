    // function which will encrypt the plaintext 
    function encipher() {
      // get the plain text
      var text1 = document.getElementById("text1").value;
      var i = 0;
      var ans = "";
      var c;
      while(i < text1.length) {
        c = text1.charCodeAt(i);
        if(c >= 97 && c <= 122) {
          c = 25 - c + 2 * 97;
          ans += String.fromCharCode(c);
        }
        else if(c >= 65 && c <= 90) {
          c = 25 - c + 2 * 65;
          ans += String.fromCharCode(c);
        }
        else 
        ans += text1.charAt(i);
        i++;
      }
      // output the cipher text 
      document.getElementById("text2").value = ans;
    }
    // function which will decrypt the cipher text
    function decipher() {
      // get the ciphered text 
      var text = document.getElementById("text2").value;
      var i = 0;
      var ans = "";
      var c;
      while(i < text.length) {
        c = text.charCodeAt(i);
        if(c >= 97 && c <= 122) {
          c = 25 - c + 2 * 97;
          ans += String.fromCharCode(c);
        }
        else if(c >= 65 && c <= 90) {
          c = 25 - c + 2 * 65;
          ans += String.fromCharCode(c);
        }
        else ans += text.charAt(i);
        i++;
      }
      // output the plain text 
      document.getElementById("text1").value = ans;
    }
    
