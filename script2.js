
var content = 1;

function ChangeContents() {
    console.log("ChangeContents");
    var file = this.files[0];

    var reader = new FileReader();
    reader.onload = function(progressEvent){
      // Entire file
      //console.log(this.result);
  
      // By lines
      // line by line으로 split 
      var lines = this.result.split('\n');
      for(var line = 0; line < lines.length; line++){
        // console.log(lines[line]);
        // content 번호 순으로 텍스트파일의 각 라인 가져와서 HTML 수정 
        document.getElementById(content).innerHTML = lines[line];        
        content++;
      }
    };
    reader.readAsText(file);   
}

ChangeContents();