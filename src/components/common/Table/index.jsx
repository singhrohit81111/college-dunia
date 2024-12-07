import React from "react";
import { TABLE_HEADINGS } from "@config/constants";
import { IMAGE_URL, RANKING_IMAGE_URL } from "@config/constants";
import { Icon } from "@iconify/react";
import formatIndianNumber from "@utils/fomats.utils";

const COLLEGES = [
  {
    college_id: "25881",
    college_name: "IIT Madras - Indian Institute of Technology - [IITM]",
    college_short_form: "IIT Madras",
    state: "Tamil Nadu",
    state_id: "31",
    city_id: "471",
    college_city: "Chennai",
    logo: "public/college_data/images/logos/1434977143jpjpjpjpj.jpg",
    cover: "public/college_data/images/appImage/1509430807cover.jpg",
    approvals: ["AICTE"],
    major_stream_rating: "10",
    rating: "10.0",
    fees: [
      {
        type: "first year fees",
        link: "bachelor-of-technology-btech-computer-science-and-engineering-2049",
        fee: 242000,
        short_form: "BE/B.Tech",
        name: "BE/B.Tech - Bachelor of Technology",
        count: 25,
        course_id: 18,
      },
    ],
    reviewsData: {
      student: "Vaibhav Mishra",
      studentStatus: null,
      avgRating: 4.3,
      defaultDesc:
        "IIT MADRAS IS NIRF 1 IN THE COUNTRY WHICH DECLARES IT AS ONE OF THE BEST COLLEG OF COUNTRY. THIS IS THE PRIMARY REASON I CHOOSE THIS COLLEGE OVER OTHER COLLEGES IN COUNTRY AS IT WOULD PROVIDE ME A GREAT OPPORTUNITIES FOR FUTURE.",
      totalStudent: "382",
      userReviewsData: {
        rating_stats: {
          terrible: 0,
          poor: 7,
          avg: 6,
          very_good: 75,
          excellent: 248,
          total: 336,
        },
        avg_reviews_academic_rating: 4.283335,
        avg_reviews_faculty_rating: 4.133335,
        avg_reviews_infrastructure_rating: 3.95,
        avg_reviews_accommodation_food_rating: 4.55,
        avg_reviews_social_life_rating: 4.5,
        avg_reviews_placement_rating: 4.166665,
        avg_total: 4.3,
        total_student: "382",
      },
    },
    rankingData: [
      {
        year: 2025,
        logo: "collegedunia_2025_ranking1733467060.png",
        agencyId: 42,
        rankingOfCollege: 3,
        rankingOutOfTotalNoOfCollege: 745,
        agency: "Collegedunia",
      },
    ],
    singlePage: "0",
    url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai",
    cutoff_data: {
      cutoff_type: "rank",
      cutoff_count: 11,
      data: {
        2023: [
          {
            course_id: 2049,
            course_short_form: "B.Tech Computer Science Engineering",
            cutoff_year: 2023,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "148",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-computer-science-and-engineering-2049",
          },
          {
            course_id: 2052,
            course_short_form: "B.Tech Electrical Engineering",
            cutoff_year: 2023,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "964",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-electrical-engineering-2052",
          },
          {
            course_id: 2064,
            course_short_form: "B.Tech Engineering Physics",
            cutoff_year: 2023,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "1877",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-engineering-physics-2064",
          },
          {
            course_id: 2094,
            course_short_form: "B.Tech Mechanical Engineering",
            cutoff_year: 2023,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "2572",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-mechanical-engineering-2094",
          },
          {
            course_id: 7044,
            course_short_form: "B.Tech  + M.Tech Aerospace Engineering",
            cutoff_year: 2023,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "3293",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-master-of-technology-mtech-aerospace-engineering-7044",
          },
          {
            course_id: 1937,
            course_short_form: "B.Tech Chemical Engineering",
            cutoff_year: 2023,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "4439",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-chemical-engineering-1937",
          },
          {
            course_id: 15782,
            course_short_form: "B.Tech  +  M.Tech. Engineering Design",
            cutoff_year: 2023,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "4436",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-mtech-engineering-design-15782",
          },
          {
            course_id: 1938,
            course_short_form: "B.Tech Civil Engineering",
            cutoff_year: 2023,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "6132",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-civil-engineering-1938",
          },
          {
            course_id: 6844,
            course_short_form: "B.Tech Metallurgical and Materials Engineering",
            cutoff_year: 2023,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "6169",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-metallurgical-and-materials-engineering-6844",
          },
          {
            course_id: 28012,
            course_short_form: "B.Tech Biological Engineering",
            cutoff_year: 2023,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "7967",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-biological-engineering-28012",
          },
          {
            course_id: 2103,
            course_short_form: "B.Tech Naval architecture & Ocean Engineering",
            cutoff_year: 2023,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "7996",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-naval-architecture-and-ocean-engineering-2103",
          },
        ],
        2024: [
          {
            course_id: 16073,
            course_short_form: "B.Tech Artificial Intelligence",
            cutoff_year: 2024,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "419",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/courses-fees?course_id=16073",
          },
          {
            course_id: 2052,
            course_short_form: "B.Tech Electrical Engineering",
            cutoff_year: 2024,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "838",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-electrical-engineering-2052",
          },
          {
            course_id: 2064,
            course_short_form: "B.Tech Engineering Physics",
            cutoff_year: 2024,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "1858",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-engineering-physics-2064",
          },
          {
            course_id: 2024,
            course_short_form: "B.Tech Aerospace Engineering",
            cutoff_year: 2024,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "6845",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-aerospace-engineering-2024",
          },
          {
            course_id: 2094,
            course_short_form: "B.Tech Mechanical Engineering",
            cutoff_year: 2024,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "2310",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-mechanical-engineering-2094",
          },
          {
            course_id: 15782,
            course_short_form: "B.Tech  +  M.Tech. Engineering Design",
            cutoff_year: 2024,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "3656",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-mtech-engineering-design-15782",
          },
          {
            course_id: 1937,
            course_short_form: "B.Tech Chemical Engineering",
            cutoff_year: 2024,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "3972",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-chemical-engineering-1937",
          },
          {
            course_id: 6844,
            course_short_form: "B.Tech Metallurgical and Materials Engineering",
            cutoff_year: 2024,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "4748",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-metallurgical-and-materials-engineering-6844",
          },
          {
            course_id: 28012,
            course_short_form: "B.Tech Biological Engineering",
            cutoff_year: 2024,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "5755",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-biological-engineering-28012",
          },
          {
            course_id: 1938,
            course_short_form: "B.Tech Civil Engineering",
            cutoff_year: 2024,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "5688",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-civil-engineering-1938",
          },
          {
            course_id: 2103,
            course_short_form: "B.Tech Naval architecture & Ocean Engineering",
            cutoff_year: 2024,
            exam_short_form: "JEE-Advanced",
            cutoff_end: "7404",
            url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/bachelor-of-technology-btech-naval-architecture-and-ocean-engineering-2103",
          },
        ],
      },
    },
    tagline: "Best in Social Life",
    placement: {
      average_salary: "2148000",
      highest_salary: "19800000",
    },
    placement_percentage: "0",
    top_course: {
      course_id: 16073,
      course_short_form: "B.Tech Artificial Intelligence",
      cutoff_year: 2024,
      exam_short_form: "JEE-Advanced",
      cutoff_end: "419",
      url: "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/courses-fees?course_id=16073",
    },
    view_all_course:
      "university/25881-iit-madras-indian-institute-of-technology-iitm-chennai/jee-advanced-cutoff",
    stream_ranking: {
      logo: [
        "qs_world_university_ranking_1569844025.png",
        "collegedunia_2025_ranking1733467060.png",
        "the_week1569844170.png",
      ],
      count: 12,
    },
    is_compare: true,
    defaultRankingData: [
      {
        year: 2025,
        logo: "qs_world_university_ranking_1569844025.png",
        agencyId: 8,
        rankingOfCollege: 227,
        rankingOutOfTotalNoOfCollege: 1400,
        agency: "QS",
      },
    ],
    exam: {
      text: "JEE ADVANCED",
      link: "exams/jee-advanced",
    },
    photoCount: "15",
    videoCount: "2",
    courseCount: 25,
    availableTabs: {
      admission: {
        name: "Admission 2024",
        tooltip: " - Admission Details 2024",
      },
      reviews: {
        name: "Reviews",
        tooltip: " - Reviews ",
      },
      coursesFees: {
        name: "Courses & Fees",
        tooltip: " - Course & Fees Details ",
      },
      placement: {
        name: "Placement",
        tooltip: " - Placement Details and Companies Visiting ",
      },
      scholarship: {
        name: "Scholarship",
        tooltip: " - Scholarship Details ",
      },
      gallery: {
        name: "Gallery",
        tooltip: " - Photos & Videos ",
      },
      hostel: {
        name: "Hostel",
        tooltip: " - Hostel Details ",
      },
      faculty: {
        name: "Faculty",
        tooltip: " - List of Professors and Faculty ",
      },
      news: {
        name: "News & Articles",
        tooltip: " - News & Articles Details ",
      },
      department: {
        name: "Department",
        tooltip: " - associated department",
      },
      ranking: {
        name: "Ranking",
        tooltip: " Ranking 2024 In India And World",
      },
      compare: {
        name: "College Compare",
        tooltip: "",
      },
    },
    facilities: [
      "Comp Labs",
      "Sports",
      "Gym",
      "Medical",
      "Cafeteria",
      "Laboratory",
      "Library",
      "Auditorium",
      "Hostel",
      "Classrooms",
      "Wi-FI Campus",
    ],
    distance: null,
  },
];

function Table() {
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
        {COLLEGES?.map((college) => (
          <tr key={college?.college_id}>
            {/*Rank*/}
            <td className="text-base font-medium p-3 border-r-[1px] border-r-[#dedede]">
              <span>#</span>
              <span>
                {college?.rankingData?.[0]?.rankingOfCollege ?? "N'A"}
              </span>
            </td>

            {/*Colleges*/}
            <td className=" p-3 border-r-[1px] border-r-[#dedede] w-1/3">
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
                    <img src={IMAGE_URL} alt="college-image" loading="lazy" height={25} width={25}/>
                  </span>
                  <span className="text-left -ml-[5px]">
                    <img src={IMAGE_URL} alt="college-image" loading="lazy" height={25} width={25}/>
                  </span>
                  <span className="text-left -ml-[5px]">
                    <img src={IMAGE_URL} alt="college-image" loading="lazy" height={25} width={25}/>
                  </span>
                </span>
                <span className="text-sm self-center">
                  + 9 More
                </span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
