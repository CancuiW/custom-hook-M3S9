import { useState } from "react";
//local storage is in console column "Application"

//  get infor from useDarkMode --->  key="hehe" ,initialValue=false
const useLocalStorage = (key ,initialValue) => {
    
    const [state, setState] = useState(() => {
        const item = localStorage.getItem(key);
        if (item){
            //local 中如果存储了有关于key的object，就拿出来当storedValue 的初始值
            return JSON.parse(localStorage.getItem(key));
        }
        //如果没有，将'key-value pair' [key:initialValue] store in localStorage
        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    });

    //这个function是用做给state重新赋值的操作，只是这个值需要先存储到local里再执行
    const setStoredState=value=>{
        localStorage.setItem(key,JSON.stringify(value));
        setState(value);
    };

    return [state,setStoredState];

};

   

export default useLocalStorage;