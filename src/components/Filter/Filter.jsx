import React, { useState, useEffect } from 'react';
import './Projects.scss';
import Filter from '../../components/Filter/Filter';
import data from '../../data/infos.json';
import translations from '../../data/translate.json';

function Projects({ lang }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedThemes, setSelectedThemes] = useState([]);
    const [type, setType] = useState([]);
    const [region, setRegion] = useState([]);
    const [source, setSource] = useState([]);
    const [languageFilter, setLanguageFilter] = useState([]);
    const [organization, setOrganization] = useState([]);
    const [paid, setPaid] = useState(null);
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        setProjects(data[lang].Projects);
        setFilteredProjects(data[lang].Projects);
    }, [lang]);

    useEffect(() => {
        filterProjects();
    }, [searchTerm, selectedThemes, type, region, source, languageFilter, organization, paid]);

    const filterProjects = () => {
        let filtered = projects;

        if (searchTerm) {
            filtered = filtered.filter((project) =>
                project.name.toLowerCase().includes(searchTerm)
            );
        }

        if (selectedThemes.length > 0) {
            filtered = filtered.filter((project) =>
                selectedThemes.every((theme) => project.themes.includes(theme))
            );
        }

        if (type.length > 0) {
            filtered = filtered.filter((project) =>
                type.every((t) => project.type.includes(t))
            );
        }

        if (region.length > 0) {
            filtered = filtered.filter((project) =>
                region.every((r) => project.region.includes(r))
            );
        }

        if (source.length > 0) {
            filtered = filtered.filter((project) => {
                console.log("Project Source:", project.source);
                console.log("Selected Sources:", source);
                const sourceMatch = source.includes(project.source);
                console.log("Source Match:", sourceMatch);
                return sourceMatch;
            });
        }

        if (languageFilter.length > 0) {
            filtered = filtered.filter((project) =>
                languageFilter.every((language) => project.languages.includes(language))
            );
        }

        if (organization.length > 0) {
            filtered = filtered.filter((project) =>
                organization.every((org) => project.organization.includes(org))
            );
        }

        if (paid !== null) {
            filtered = filtered.filter((project) => project.paid === paid);
        }

        setFilteredProjects(filtered);
    };

    return (
        <div className='projects-page'>
            <Filter
                setType={setType}
                setRegion={setRegion}
                setSource={setSource}
                setSelectedThemes={setSelectedThemes}
                setSearchTerm={setSearchTerm}
                setLanguageFilter={setLanguageFilter}
                setOrganization={setOrganization}
                setPaid={setPaid}
                lang={lang}
            />
            <div className='projects-list'>
                {filteredProjects.map((project) => (
                    <div key={project.id} className='project-item'>
                        <h3>{project.name}</h3>
                        <p>Source: {project.source}</p>
                        {/* Render other project details */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
