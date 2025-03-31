'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import portfolioDetailsThumb from "@/assets/img/portfolio/portfolio-details.jpg";

interface ProjectDetails {
  title: string;
  desc: Array<any>;
  thumb?: string | null;
}

const PortfolioDetailsArea = () => {
  const [projectData, setProjectData] = useState<ProjectDetails | null>(null);

  useEffect(() => {
    const documentId = localStorage.getItem("projectDocumentId");
    if (documentId) {
      fetchProjectData(documentId);
    }
  }, []);

  const fetchProjectData = async (documentId: string) => {
    try {
      const res = await fetch(`http://localhost:1337/api/projects/${documentId}?populate=*`);
      const data = await res.json();
      if (data.data) {
        const fetchedProject: ProjectDetails = {
          title: data.data.Title, // Mapping Title from API
          desc: data.data.Descripton || [], // Mapping Descripton from API
          thumb: data.data.thumb?.url || null, // If available
        };
        setProjectData(fetchedProject);
      }
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };

  // Render the description content dynamically
  const renderDescription = (desc: Array<any>) => {
    return desc.map((block, index) => {
      switch (block.type) {
        case "heading":
          return (
            <h1 key={index} style={{ fontWeight: "bold", fontStyle: "italic" }}>
              {block.children[0]?.text}
            </h1>
          );
        case "paragraph":
          return <p key={index}>{block.children[0]?.text}</p>;
        default:
          return null;
      }
    });
  };

  return (
    <div className="portfolio-details-area pt-120 pb-105">
      <div className="container">
        <div className="portfolio-details-content">
          <div className="details-image mb-50">
            {projectData?.thumb ? (
              <Image src={projectData.thumb} alt="Portfolio details" width={500} height={300} />
            ) : (
              <Image src={portfolioDetailsThumb} alt="Fallback image" width={500} height={300} />
            )}
          </div>
          <h3 className="title mb-20">{projectData?.title || "Default Project Title"}</h3>
          {renderDescription(projectData?.desc || [])}
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailsArea;
