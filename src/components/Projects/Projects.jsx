import { useState } from "react";
import "./Projects.css";

function Projects() {

  const projects = [
    {
      id: 1,
      name: "Weather Forecast",
      image: "/weather.jpg",
      category: "web",
      description:
        "A weather forecast website showing temperature, rain chances, wind and hourly updates so users can plan their day.",
      tech: ["React", "API"]
    },

    {
      id: 2,
      name: "A Pet Friendly Cafe Guide",
      image: "/pet.png",
      category: "web",
      description:
        "A guide for pet-friendly cafes, hotels, parks and stores with useful information for people travelling with their pets.",
      tech: ["React", "API"]
    },

    {
      id: 3,
      name: "A Travel Guide",
      image: "/travel.jpg",
      category: "web",
      description:
        "A travel planning website that helps users explore destinations, activities and useful local travel information.",
      tech: ["React", "API"]
    }
  ];

  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(
          (project) => project.category === filter
        );

  return (
    <section
      id="projects"
      className="projects-section"
    >

      <h2>My Projects</h2>

      <div className="filter-buttons">

        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "web" ? "active" : ""}
          onClick={() => setFilter("web")}
        >
          Web
        </button>

      </div>

      <div className="project-grid">

        {filteredProjects.map((project) => (

          <article
            className="project-card"
            key={project.id}
          >

            <img
              src={project.image}
              alt={project.name}
            />

            <div className="project-card-body">

              <h3>
                {project.name}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="project-tags">

                {project.tech.map((tech) => (

                  <span
                    className="tag"
                    key={tech}
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="project-buttons">

                <a
                  href="#"
                  className="btn"
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  className="btn"
                >
                  GitHub
                </a>

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Projects;