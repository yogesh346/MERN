import { useParams } from "react-router-dom";

function child ({name,age,gender}){
    const handleKeyDown = (event)=>{
        if (event.key==="Enter"){
            event.target.value = name
        }
    };
    let {paramsName} = useParams();
    let fname = name ?(<h1>Query asked{name}</h1>):
    (<><lable>Give your name</lable>
    <input type="text"/></>)

    let umar = name ?(<h2>age is{age}</h2>):(<h2>Enter your age</h2>)
}
