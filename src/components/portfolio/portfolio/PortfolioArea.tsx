"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Tab categories
const tab_title: string[] = ["All", "Events", "Projects"];
const portfolioCounts: number[] = [0, 0, 0]; // Initialize with 0 for now, we will update dynamically

interface PortfolioItem {
  id: number;
  documentId: string;
  title: string;
  Description: { children: { text: string }[] }[];
  images: { url: string }[];
}

const PortfolioArea = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [projectsData, setProjectsData] = useState<PortfolioItem[]>([]);
  const [eventsData, setEventsData] = useState<PortfolioItem[]>([]);


  const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;


  // Fetch data from Strapi API for Projects and Events
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Projects data
        const projectsResponse = await fetch(`${API_URL}/api/projects`);
        const projectsData = await projectsResponse.json();
        setProjectsData(projectsData.data);
        portfolioCounts[2] = projectsData.data.length; // Set the count for Projects tab

        // Fetch Events data
        const eventsResponse = await fetch(`${API_URL}/api/events`);
        const eventsData = await eventsResponse.json();
        setEventsData(eventsData.data);
        portfolioCounts[1] = eventsData.data.length; // Set the count for Events tab
      } catch (error) {
        console.error("Error fetching project or event data:", error);
      }
    };
    fetchData();
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const renderPortfolioItems = (filteredData: PortfolioItem[]) => {
    return (
      <div className="row">
        {filteredData.map((item) => (
          <div key={item.id} className="col-xl-3 col-md-6">
            <div className="cause-item">
              <div className="image">
                <Image
                  src={
                    item.images && item.images.length > 0
                      ? item.images[0].url
                      : "/project-placeholder.jpg"
                  }
                  alt={item.title}
                  width={400}
                  height={300}
                />
              </div>
              <div className="content">
                <h5>
                  <Link
                    href={`/portfolio-details/${item.documentId}`}
                    onClick={() =>
                      localStorage.setItem("projectDocumentId", item.documentId)
                    }
                  >
                    {item.title}
                  </Link>
                </h5>
                <p>
                  {item.Description && item.Description.length > 0
                    ? item.Description[0].children[0]?.text
                    : "No description available"}
                </p>
                <div className="cause-btn">
                  <Link
                    className="cr-btn"
                    href={`/portfolio-details/${item.documentId}`}
                    onClick={() =>
                      localStorage.setItem("projectDocumentId", item.documentId)
                    }
                  >
                    View Gallery <i className="flaticon-chevron"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  const getFilteredData = () => {
    let filteredData: PortfolioItem[] = [];

    // Filter data based on the selected tab
    if (activeTab === 0) {
      // "All" tab - display both Projects and Events
      filteredData = [...projectsData, ...eventsData];
    } else if (activeTab === 1) {
      // "Events" tab - display only events
      filteredData = eventsData;
    } else if (activeTab === 2) {
      // "Projects" tab - display only projects
      filteredData = projectsData;
    }

    return filteredData;
  };

  return (
    <div className="portfolio-page-area pt-120 pb-90 rel z-1">
      <div className="container">
        <ul className="portfolio-filter pb-35">
          {/* Map over the tab titles to create the filter buttons */}
          {tab_title.map((tab, index) => (
            <li
              key={index}
              onClick={() => handleTabClick(index)}
              className={activeTab === index ? "current" : ""}
            >
              {tab}
            </li>
          ))}
        </ul>

        <div className="tab-content">
          {/* Render content based on the active tab */}
          <div
            className={`tab-pane fade ${activeTab === 0 ? "show active" : ""}`}
          >
            <div className="row portfolio-active justify-content-center">
              {renderPortfolioItems(getFilteredData())}
            </div>
          </div>

          <div
            className={`tab-pane fade ${activeTab === 1 ? "show active" : ""}`}
          >
            <div className="row portfolio-active justify-content-center">
              {renderPortfolioItems(getFilteredData())}
            </div>
          </div>

          <div
            className={`tab-pane fade ${activeTab === 2 ? "show active" : ""}`}
          >
            <div className="row portfolio-active justify-content-center">
              {renderPortfolioItems(getFilteredData())}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioArea;
