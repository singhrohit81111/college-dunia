import React, { useEffect, useRef, useState } from "react";
import Table from "@components/common/Table";
import data from "@config/data.json";
import RadioButtonGroup from "@components/common/RadioButtonGroup";
import { RADIO_OPTIONS } from "@config/constants";
import SearchInput from "@components/common/SearchInput";

function Home() {
  const [colleges, setColleges] = useState([]);
  const [selectedValue, setSelectedValue] = useState("cdRanking");
  const [searchQuery, setSearchQuery] = useState("");
  const targetRef = useRef(null);
  const observerRef = useRef();

  const handleSearchChange = (value) => {
    setSearchQuery(value);
    if (!value.trim()) {
      console.log("truthy");
      setColleges(data.slice(0, 10));
      observerRef.current.observe(targetRef.current);
    } else {
      const searchedColleges = colleges?.filter((college) =>
        college?.college_name.toLowerCase().includes(value.toLowerCase())
      );
      setColleges(searchedColleges);
      console.log(searchedColleges, "clg");
    }
  };

  const handleRadioChange = (value) => {
    setSelectedValue(value);
    switch (value) {
      case "reviews": {
        console.log("reviews");
        setColleges((prevColleges) =>
          prevColleges.sort(
            (a, b) => a?.reviewsData?.avgRating - b?.reviewsData?.avgRating
          )
        );
        break;
      }
      case "highestFees": {
        console.log("hFees");
        setColleges((prevColleges) =>
          prevColleges.sort((a, b) => b?.fees?.[0]?.fee - a?.fees?.[0]?.fee)
        );
        break;
      }
      case "lowestFees": {
        console.log("lFees");
        setColleges((prevColleges) =>
          prevColleges.sort((a, b) => a?.fees?.[0]?.fee - b?.fees?.[0]?.fee)
        );
        break;
      }
    }
  };

  useEffect(() => {
    const slicedColleges = data.slice(0, colleges.length + 10);
    console.log(slicedColleges, "slice");
    setColleges(slicedColleges);
  }, []);

  useEffect(() => {
    function loadData() {
      setTimeout(() => {
        const slicedColleges = data.slice(
          colleges.length,
          colleges.length + 10
        );
        if (slicedColleges.length === 0) {
          observerRef.current.disconnect();
          return;
        }
        console.log(slicedColleges.length, "triggered");
        // setColleges((prevColleges) => [...prevColleges, ...slicedColleges]);

        console.log(selectedValue, "value");

        setColleges((prevColleges) => {
          // Combine existing colleges with new ones
          const updatedColleges = [...prevColleges, ...slicedColleges];
          console.log(updatedColleges, "uclg", selectedValue);
          // Sorting logic based on selectedValue
          switch (selectedValue) {
            case "reviews":
              console.log("reviews");
              return updatedColleges.sort(
                (a, b) => a?.reviewsData?.avgRating - b?.reviewsData?.avgRating
              );

            case "highestFees":
              console.log("hFees");
              return updatedColleges.sort(
                (a, b) => b?.fees?.[0]?.fee - a?.fees?.[0]?.fee
              );

            case "lowestFees":
              console.log("lFees");
              return updatedColleges.sort(
                (a, b) => a?.fees?.[0]?.fee - b?.fees?.[0]?.fee
              );

            default:
              return updatedColleges; // No sorting for default case
          }
        });
      }, 1 * 1000);
    }

    {
      /* Instance of intersection observer */
    }
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (colleges.length >= 10) {
              loadData();
              console.log("hii");
            } else {
              observerRef.current.unobserve(targetRef.current);
            }
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
  }, [colleges, selectedValue]);

  return (
    <>
      <nav className="mx-6 mt-6 pb-2 flex justify-between border-b border-gray-300">
        <div className="text-[#333] text-xl font-bold self-centers">{`Found ${data.length} Colleges`}</div>
        <div className="flex gap-3">
          <div className="self-center">
            <SearchInput
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Type to search..."
            />
          </div>
          <div className="self-center flex gap-2">
            <div className="font-bold	">Sort By</div>
            <RadioButtonGroup
              options={RADIO_OPTIONS}
              selectedValue={selectedValue}
              onChange={handleRadioChange}
            />
          </div>
        </div>
      </nav>

      <main className="w-screen">
        <section className="m-6">
          <Table colleges={colleges} />
        </section>
        <section ref={targetRef} />
      </main>
    </>
  );
}

export default Home;
