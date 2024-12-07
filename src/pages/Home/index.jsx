import React, { useEffect, useRef, useState } from "react";
import Table from "@components/common/Table";
import data from "../../config/data.json";

function Home() {
  const [colleges, setColleges] = useState([]);
  const targetRef = useRef(null);
  const observerRef = useRef();

  useEffect(() => {
    const slicedColleges = data.slice(0, 10);
    console.log(slicedColleges, "slice");
    setColleges(slicedColleges);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            //   loadData();
            console.log("hii");
          }
        });
      },
      { threshold: 1 }
    );

    if (targetRef.current) {
      observerRef.current.observe(targetRef.current);
    }
    return () => observerRef.current.disconnect();
  }, [colleges]);
  return (
    <main className="w-screen">
      <section className="p-6">
        <Table colleges={colleges}/>
      </section>
      <section ref={targetRef} />
    </main>
  );
}

export default Home;
