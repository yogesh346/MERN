import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { useRef } from "react";
import "./Ref.css";

function Ref() {
  //function bnaya ref naam ka
  const ref = useRef(); ////hook use kiya hai
  const [Tecno, setTecno] = useState(false); //settecno m koi chiz change hogi to tecno m jyegi

  useEffect(() => {
    if (ref.current.clientHeight < ref.current.scrollHeight) {
      //jb clientHeight kam hogi scrole height se tbhi stae true hogi aur ... ayega
      setTecno(true); // to ye shatae true hogii to condition se ... print hoga
    }
  }, [ref, ref?.current]); //dependency mei check hora hai ki kab reff change hoga

  //ek custom function banaya hai for useLayoutEffect() Hook
  const call = () => {
    if (ref.current?.clientHeight < ref.current?.scrollHeight) {
      //same hi condition lagai gai hai useEffect walii
      setTecno(true); //age if wali condition sahi hogii to state true banegii, nahi to else part chalega jo ki state false karega to ...  nahi show hogaa
    } else setTecno(false);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", call); // browser mei ye bana banaya function hai jo resize mei kuch harkat karta hai jab b browser ka size badalta haii
    return () => {
      window.removeEventListener("remove", call); //ye wala tab harkat karega agr ham page se hatjayeingey
    };
  }, [call]); //call dependency tab chalegii jab call mei koi value change huii nai to useLayoutEffect kaam nahi karegaa tab takk

  return (
    <Fragment>
      <div ref={ref} className="listItem">
        Businesses are obligated to observe varied government- and
        industry-driven regulatory requirements. IT staff play a major role in
        securing and monitoring access to business data and applications to
        ensure that such resources are used according to established business
        governance policy that meets regulatory requirements. Such staff are
        deeply involved with security tasks and routinely interact with legal
        and business teams to prevent, detect, investigate and report possible
        breaches.
        {Tecno && <div className="dot">...</div>}
      </div>
    </Fragment>
  );
}

export default Ref;
