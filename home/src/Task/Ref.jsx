import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import { useRef } from "react";
import "./Ref.css";

function Ref() {
  const ref = useRef();
  const [Ellipsis, setEllipsis] = useState(false);

  useEffect(() => {
    if (ref.current.clientHeight < ref.current.scrollHeight) {
      setEllipsis(true);
    }
  }, [ref, ref?.current]);

  const call = () => {
    if (ref.current?.clientHeight < ref.current?.scrollHeight) {
      setEllipsis(true);
    } else setEllipsis(false);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", call);
    return () => {
      window.removeEventListener("remove", call);
    };
  }, [call]);

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
        {Ellipsis && <div className="dot">...</div>}
      </div>
    </Fragment>
  );
}

export default Ref;
