import React from "react";
import { TABLE_HEADINGS } from "@config/constants";
import { IMAGE_URL, RANKING_IMAGE_URL } from "@config/constants";
import { Icon } from "@iconify/react";
import formatIndianNumber from "@utils/fomats.utils";
import { FEATURED_IMAGE_URL } from "../../../config/constants";

function Table({ colleges }) {
  return (
    <table className="w-full border-[1px] border-[#dedede]">
      {/*Table Head*/}
      <thead className="bg-[#88bdc4] text-white">
        <tr>
          {TABLE_HEADINGS.map((tableHeading) => (
            <th className="p-3 border-r-[1px] border-r-[#dedede] text-left text-sm">
              {tableHeading}
            </th>
          ))}
        </tr>
      </thead>

      {/*Table Body*/}
      <tbody>
        {colleges?.map((college, index) => (
          <tr key={college?.college_id} className="border-b border-gray-300 ">
            {/*Rank*/}
            <td className="text-base font-medium p-3 border-r-[1px] border-r-[#dedede]">
              <span>#</span>
              <span>
                {/* {college?.rankingData?.[0]?.rankingOfCollege ?? "N'A"} */}
                {index + 1}
              </span>
            </td>

            {/*Colleges*/}
            <td className=" p-3 border-r-[1px] border-r-[#dedede] w-1/3 relative">
              {/*Featured tag*/}
              {college?.featured && (
                <div className="absolute -top-1">
                  <img
                    src={FEATURED_IMAGE_URL}
                    alt="featured-image"
                    loading="lazy"
                  />
                  <div className=" z-100 text-xs absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                    Featured
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <span className="text-left">
                  <img src={IMAGE_URL} alt="college-image" loading="lazy" />
                </span>
                <div className="flex flex-col self-center gap-1">
                  <div className=" text-[#4FB8DD] text-base font-medium ">
                    <span>{college?.college_name ?? "N/A"}</span>
                    <span>, </span>
                    <span>{college?.college_city ?? "N/A"}</span>
                  </div>

                  <div className="flex gap-2 text-xs text-[#666666]">
                    <span>
                      <span>{college?.college_city ?? "N/A"}</span>
                      <span>,</span>
                      <span>{college?.state ?? "N/A"}</span>
                    </span>
                    {college?.approvals && (
                      <span>
                        <span> |</span>
                        <span className="pl-2">{college?.approvals}</span>
                      </span>
                    )}
                  </div>

                  <div
                    className=" w-max border-l-2 border-[#FF7900] py-2 pl-4 pr-12 bg-[#FFF8E4] flex flex-col text-xs"
                    style={{
                      //   clipPath:
                      //     "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
                      clipPath:
                        "polygon(0% 0%, 85% 0%, 100% 40%, 85% 100%, 0% 100%)",
                    }}
                  >
                    <span className="text-[#FF7900]">
                      {college?.top_course?.course_short_form ?? "N/A"}
                    </span>
                    <span>
                      <span>JEE-Advanced 2024 Cutoff :</span>
                      <span> {college?.top_course?.cutoff_end ?? "N/A"}</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-sm flex justify-between py-4">
                <button className="flex gap-1 text-[#FF7900]">
                  <span>
                    <Icon icon="ix:arrow-right" width="20" height="20" />
                  </span>
                  <span>Apply Now</span>
                </button>

                <button className="flex gap-1 text-[#3EAE8D]">
                  <span>
                    <Icon
                      icon="material-symbols-light:download"
                      width="20"
                      height="20"
                    />
                  </span>
                  <span> Dowload Brochure</span>
                </button>

                <span className="flex gap-1">
                  <input
                    type="checkbox"
                    name="add-to-compare"
                    id="add-to-compares"
                  />
                  <label htmlFor="add-to-compare">Add To Compare</label>
                </span>
              </div>
            </td>

            {/*Course Fees*/}
            <td className=" p-3 border-r-[1px] border-r-[#dedede] align-top space-y-3">
              <div className="text-[#3EAE8D] text-base font-bold hover:underline hover:cursor-pointer">
                <span>₹ </span>
                <span>
                  {college?.fees?.[0]?.fee
                    ? formatIndianNumber(college?.fees?.[0]?.fee)
                    : "N/A"}
                </span>
              </div>
              <div className="text-xs text-[#666666] font-medium hover:underline hover:cursor-pointer">
                BE/B.Tech
              </div>
              <div className="text-xs text-[#666666] font-medium hover:underline hover:cursor-pointer">
                - 1st Year Fees
              </div>
              <button className="flex gap-1 text-xs text-[#ff7900]">
                <span>
                  <Icon
                    icon="fluent:arrow-swap-16-filled"
                    width="20"
                    height="20"
                  />
                </span>
                <span>Compare Fees</span>
              </button>
            </td>

            {/*Placement*/}
            <td className=" p-3 border-r-[1px] border-r-[#dedede] align-top space-y-3">
              <div className="font-bold hover:underline hover:cursor-pointer ">
                <div className="text-[#3EAE8D] text-base ">
                  <span>₹ </span>
                  <span>
                    {college?.placement?.average_salary
                      ? formatIndianNumber(college?.placement?.average_salary)
                      : "N/A"}
                  </span>
                </div>
                <div className="text-xs text-[#666666] font-medium">
                  Average Package
                </div>
              </div>
              <div className="font-bold hover:underline hover:cursor-pointer">
                <div className="text-[#3EAE8D] text-base font-bold ">
                  <span>₹ </span>
                  <span>
                    {college?.placement?.highest_salary
                      ? formatIndianNumber(college?.placement?.highest_salary)
                      : "N/A"}
                  </span>
                </div>
                <div className="text-xs text-[#666666] font-medium">
                  Highest Package
                </div>
              </div>
              <button className="flex gap-1 text-xs text-[#ff7900]">
                <span>
                  <Icon
                    icon="fluent:arrow-swap-16-filled"
                    width="20"
                    height="20"
                  />
                </span>
                <span>Compare Fees</span>
              </button>
            </td>

            {/*User Reviews*/}
            <td className=" p-3 border-r-[1px] border-r-[#dedede] align-top space-y-3">
              <div className="flex gap-2">
                <span className="bg-orange-400 rounded-full w-2 h-2 inline-block self-center"></span>
                <span className="flex gap-1 text-[#666666]">
                  <span>{college?.reviewsData?.avgRating ?? "N/A"}</span>
                  <span>/</span>
                  <span>5</span>
                </span>
              </div>
              <div className="text-xs text-[#666666] font-medium">
                <div className="flex gap-1 flex-wrap">
                  <span>Based on</span>
                  <span>
                    {college?.reviewsData?.userReviewsData?.total_student ??
                      "N/A"}
                  </span>
                  <span>User</span>
                </div>
                <div>Reviews</div>
              </div>
              <div
                className=" w-max border-l-2 border-[#FF7900] py-2 pl-1 pr-10 bg-[#FFF8E4] flex gap-2 text-xs text-[#C86C80] hover:cursor-pointer"
                style={{
                  //   clipPath:
                  //     "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
                  clipPath:
                    "polygon(0% 0%, 85% 0%, 100% 40%, 85% 100%, 0% 100%)",
                }}
              >
                <span>
                  <Icon icon="oui:arrow-down" width="20" height="20" />
                </span>
                <span>{college?.tagline ?? "N/A"}</span>
                <span>
                  <Icon icon="mdi:tick" width="20" height="20" />
                </span>
              </div>
            </td>

            {/*Ranking*/}
            <td className=" p-3 border-r-[1px] border-r-[#dedede] align-top space-y-3">
              <div className="flex gap-2 hover:cursor-pointer">
                <span className="flex gap-1 text-[#666666]">
                  <span>#</span>
                  <span>
                    <span>
                      {college?.rankingData?.[0]?.rankingOfCollege ?? "N/A"}
                    </span>
                    <span>
                      <sup>th</sup>
                    </span>
                  </span>

                  <span>/</span>
                  <span className="text-[#ff7900]">
                    {college?.rankingData?.[0]?.rankingOutOfTotalNoOfCollege ??
                      "N/A"}
                  </span>
                  <span>in India</span>
                </span>
              </div>

              <div className="text-xs text-[#666666] font-medium hover:cursor-pointer">
                <div className="flex gap-1 flex-wrap ">
                  <span>
                    <img
                      src={RANKING_IMAGE_URL}
                      alt="ranking-iamge"
                      loading="lazy"
                      height={50}
                      width={50}
                      className="grayscale"
                    />
                  </span>
                  <span className="text-base">2025</span>
                </div>
              </div>

              <div
                className=" w-max border-l-2 border-l-[#42AEE8] py-2 pl-1 pr-10 bg-[#EAF9FE] flex gap-2 text-xs text-[#C86C80] hover:cursor-pointer"
                style={{
                  //   clipPath:
                  //     "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
                  clipPath:
                    "polygon(0% 0%, 85% 0%, 100% 40%, 85% 100%, 0% 100%)",
                }}
              >
                <span className="flex">
                  <span className="text-left">
                    <img
                      src={IMAGE_URL}
                      alt="college-image"
                      loading="lazy"
                      height={25}
                      width={25}
                    />
                  </span>
                  <span className="text-left -ml-[5px]">
                    <img
                      src={IMAGE_URL}
                      alt="college-image"
                      loading="lazy"
                      height={25}
                      width={25}
                    />
                  </span>
                  <span className="text-left -ml-[5px]">
                    <img
                      src={IMAGE_URL}
                      alt="college-image"
                      loading="lazy"
                      height={25}
                      width={25}
                    />
                  </span>
                </span>
                <span className="text-sm self-center">+ 9 More</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
