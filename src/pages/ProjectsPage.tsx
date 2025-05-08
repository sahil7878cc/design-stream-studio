
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Play, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: "Brand Animation",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1950&auto=format&fit=crop",
    duration: "00:45",
    lastEdited: "3 days ago",
  },
  {
    id: 2,
    title: "Product Showcase",
    thumbnail: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop",
    duration: "01:30",
    lastEdited: "1 week ago",
  },
  {
    id: 3,
    title: "Social Media Ad",
    thumbnail: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=2070&auto=format&fit=crop",
    duration: "00:15",
    lastEdited: "2 days ago",
  },
  {
    id: 4,
    title: "Client Presentation",
    thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
    duration: "03:20",
    lastEdited: "Just now",
  },
  {
    id: 5,
    title: "Motion Graphics Test",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    duration: "00:32",
    lastEdited: "5 days ago",
  },
  {
    id: 6,
    title: "Portfolio Reel",
    thumbnail: "https://images.unsplash.com/photo-1601506521937-0121a7fcb13d?q=80&w=2072&auto=format&fit=crop",
    duration: "02:15",
    lastEdited: "2 weeks ago",
  }
];

const ProjectsPage = () => {
  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Projects</h1>
          <Button asChild>
            <Link to="/editor">New Project</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    thumbnail: string;
    duration: string;
    lastEdited: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
      <div className="relative aspect-video">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
          <Button variant="secondary" size="icon" className="rounded-full">
            <Play className="h-5 w-5" />
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {project.duration}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-lg truncate">{project.title}</h3>
          <Button variant="ghost" size="icon" asChild>
            <Link to={`/editor?project=${project.id}`}>
              <Edit className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Last edited {project.lastEdited}
        </p>
      </div>
    </div>
  );
};

export default ProjectsPage;
