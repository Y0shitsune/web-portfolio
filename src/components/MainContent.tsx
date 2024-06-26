import '../styles/style.css'
import Skills from './Skills.tsx'
import Billboard from './Billboard.tsx'
import Projects from './Projects.tsx'

const MainContent = () => {
	return (
		<main>
			<Billboard />

			<div id="skills" className="h-text">
				<h1 className="text-light">Skills</h1>
			</div>

			<Skills />

			<div id="projects" className="h-text">
				<h1 className="text-light">Projects</h1>
			</div>

			<Projects />
		</main>
	)
}

export default MainContent
