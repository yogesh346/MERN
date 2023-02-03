(Redux)

sabse phle main view component m component bnayuga phr uske bad jo component hota hai woh react ka component hota hai

(ACTION)
view component ka data action m jyega kuch change krna hoga to action m change hoga 
Action us change data ko dispatch krega 

(DISPATCH)
dispatch us change component ko dispatch krega phr dispatch component ko reducer k pass le k jyega

(Reducer)
reducer k andr data aa jyega or reducer state change kar dega 
state change hone k bad component view react component m show hoga

(Usedispatch)=action ka data le k jata hai reducer m ya store main

(C(ConfigureStore)=store bnaya hai mene will automatically create the  root reducer 
by passing this object to the redux

(SAGA)==
saga ek middleware hoti hai iski ek file alg se bnati hai uske andr
hum Api call kar skte hai or wahi se data ko redux k store main dal dete hai

REACT + REDUX + SAGA  YE 3 aapas m mil k or bhi jyada powerfull bn jati hai 

(SAGA)= saga m sbse phle view component ko call karte hai 
jb hum Api call krege toh action se saga call kar dege async data ko handle krega phr Action ko data return kr dega 

(SAGA)=install command npm install redux-saga

(ACTION)= action are plan function 
plan function mtlb jo normal java script k function bnte hai baise hi ye function hote hai

ACTION ka use kyu krte hai 
React js se redux k andar data send karne k liye action call karte hai