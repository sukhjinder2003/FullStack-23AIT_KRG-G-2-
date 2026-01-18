import { useState ,useEffect } from "react";


export default function useWindowState() {
    const  [height , setheight] = useState(window.innerHeight)
    const [width , setwidth] = useState(window.innerWidth)

        useEffect(()=>{
        setheight(window.innerHeight);
        setwidth(window.innerWidth);
    },[width, height]);

    return [width , height];

}
