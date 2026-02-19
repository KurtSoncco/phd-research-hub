import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Research from './pages/Research';
import Projects from './pages/Projects';
import Teaching from './pages/Teaching';
import About from './pages/About';

function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="research" element={<Research />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="teaching" element={<Teaching />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
