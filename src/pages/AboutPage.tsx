
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Edit, Camera, GalleryHorizontal, LayoutDashboard, Share } from 'lucide-react';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About DesignStream</h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            DesignStream is a specialized video editing platform created specifically for graphic designers who want to expand their creative capabilities into motion design and video content.
          </p>
          
          <div className="rounded-lg overflow-hidden mb-12">
            <img 
              src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop" 
              alt="Design team working together" 
              className="w-full aspect-video object-cover"
            />
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-8">
            We believe that designers should be able to express their creativity across all visual mediums. Our mission is to bridge the gap between static design and motion by providing intuitive tools that feel natural to graphic designers.
          </p>
          
          <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
          <div className="space-y-6 mb-12">
            <div className="flex gap-4">
              <div className="mt-1">
                <div className="bg-primary/10 p-2 rounded-md">
                  <Edit className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Designer-First Mindset</h3>
                <p className="text-muted-foreground">
                  We built our platform with designers in mind, translating familiar design concepts into the world of video and motion graphics.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1">
                <div className="bg-primary/10 p-2 rounded-md">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Powerful Simplicity</h3>
                <p className="text-muted-foreground">
                  Complex video editing made simple through an intuitive interface that doesn't sacrifice advanced functionality.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1">
                <div className="bg-primary/10 p-2 rounded-md">
                  <LayoutDashboard className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Integrated Workflow</h3>
                <p className="text-muted-foreground">
                  Seamlessly connects with your existing design tools and workflow, making the transition to video editing natural.
                </p>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Meet The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <TeamMember
              name="Alex Kim"
              role="Founder & Creative Director"
              image="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop"
            />
            <TeamMember
              name="Maya Patel"
              role="Lead Product Designer"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
            />
            <TeamMember
              name="David Chen"
              role="Lead Developer"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
            />
          </div>
          
          <div className="text-center bg-muted/50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Creating?</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-lg mx-auto">
              Join the community of designers who are expanding their creative capabilities with DesignStream.
            </p>
            <Button asChild size="lg">
              <Link to="/editor">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => {
  return (
    <div className="text-center">
      <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-bold">{name}</h3>
      <p className="text-sm text-muted-foreground">{role}</p>
    </div>
  );
};

export default AboutPage;
