import { createContext, useState } from "react";

const ProjectsContext = createContext() 

export function ProjectsProvider({children}){
    const [projects, setProjects] = useState([])

    return(
        <ProjectsContext.Provider value={{projects, setProjects}}>
            {children}
        </ProjectsContext.Provider>
    )
}

export default ProjectsContext