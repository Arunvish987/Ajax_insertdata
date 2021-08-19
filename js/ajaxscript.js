document.getElementById("btnajax").addEventListener("click", makerequest);

function makerequest(){
    console.log("button clicked")
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true)
    xhr.responseType = "json"
    xhr.onload = () => {
        if(xhr.status === 200){
            console.log(xhr.response)
            document.getElementById("info").innerText = "data inerted"
            
        } else{
            console.log('problem occured')
        }
    }
    mydata = '{"name":"sonam","salary":"100","age":"25"}'
    xhr.send(mydata);
}