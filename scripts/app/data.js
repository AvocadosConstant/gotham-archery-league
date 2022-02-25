console.log("data.js");
async function loadData(){
    const Ques=await fetch('res/test.csv');
    const data=await Ques.text();
    console.log(data);
    return;
    var file = "../../res/test.csv";
    var reader = new FileReader();
    //var link_reg = /(http:\/\/|https:\/\/)/i;
    reader.onload = function(file) {
        var content = file.target.result;
        var rows = file.target.result.split(/[\r\n|\n]+/);
        var table = document.createElement('table');

        for (var i = 0; i < rows.length; i++){
            var tr = document.createElement('tr');
            var arr = rows[i].split(',');
            console.log(arr);

            for (var j = 0; j < arr.length; j++){
                if (i==0)
                    var td = document.createElement('th');
                else
                    var td = document.createElement('td');

                //if( link_reg.test(arr[j]) ){
                //  var a = document.createElement('a');
                //  a.href = arr[j];
                //  a.target = "_blank";
                //  a.innerHTML = arr[j];
                //  td.appendChild(a);
                //}else{
                td.innerHTML = arr[j];
                //}
                tr.appendChild(td);
            }

            table.appendChild(tr);
        }

        document.getElementById('list').appendChild(table);
    };
    reader.readAsText(file);
}

loadData();
