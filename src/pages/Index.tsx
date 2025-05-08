
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import VideoPlayer from '@/components/VideoPlayer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Camera, Gallery, Layout as LayoutIcon } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Powerful Video Editing for <span className="gradient-text">Designers</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                Craft stunning visual stories with our intuitive design-focused video editing platform built for graphic designers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/editor">Start Editing</Link>
                </Button>
                <Button variant="outline" size="lg">
                  View Showcase
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-up" style={{ animationDelay: '300ms' }}>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border">
                <VideoPlayer 
                  src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
                  className="aspect-video" 
                />
              </div>
              <div className="absolute w-full h-full -bottom-6 -right-6 rounded-xl bg-gradient-to-r from-primary/30 to-accent/30 blur-xl -z-10"></div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-48 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      </section>
      
      {/* Features Section */}
      <section className="section bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Designed for Creatives</h2>
            <p className="text-lg text-muted-foreground">
              Our platform combines powerful video editing capabilities with a designer-friendly interface
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Camera className="h-8 w-8 text-primary" />}
              title="Intuitive Editing"
              description="Drag and drop interface designed specifically for graphic designers to easily transition to video"
            />
            <FeatureCard 
              icon={<LayoutIcon className="h-8 w-8 text-primary" />}
              title="Design-First Approach"
              description="Built with designers in mind, bringing familiar design tools into video editing"
              className="md:translate-y-8"
            />
            <FeatureCard 
              icon={<Gallery className="h-8 w-8 text-primary" />}
              title="Stunning Templates"
              description="Start with professionally designed templates or create your own from scratch"
            />
          </div>
        </div>
      </section>
      
      {/* Video Showcase */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">See What's Possible</h2>
            <p className="text-lg text-muted-foreground">
              From motion graphics to animated presentations, our platform handles it all
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <VideoPlayer 
              src="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" 
              className="rounded-xl shadow-lg aspect-video" 
            />
            <div className="flex flex-col justify-center space-y-6">
              <h3 className="text-2xl font-bold">Powerful Creative Tools</h3>
              <p className="text-lg text-muted-foreground">
                Our video editor provides a complete toolkit for designers to create stunning visual stories, animations, and presentations.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time video filters and effects",
                  "Motion graphics templates",
                  "Precise timeline editing",
                  "One-click export to multiple formats",
                  "Collaboration with team members"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-4 self-start">
                <Link to="/editor">Try The Editor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary to-accent text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Design Workflow?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of designers who are creating stunning videos with our platform
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/editor">Start Creating Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description,
  className
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  className?: string;
}) => {
  return (
    <div className={cn(
      "bg-card rounded-lg p-6 shadow-sm border transition-all duration-300 hover:shadow-md hover:-translate-y-1",
      className
    )}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Index;
