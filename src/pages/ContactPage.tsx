
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Mail, MessageSquare, MapPin, Phone } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <div className="container-custom py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Have questions about our platform or need assistance? We're here to help. Reach out to our team using the form below or through our contact information.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-8">
              <ContactCard
                icon={<MessageSquare className="h-5 w-5" />}
                title="Chat With Us"
                content="We're available Monday-Friday from 9am to 6pm EST for live chat support."
              />
              <ContactCard
                icon={<Mail className="h-5 w-5" />}
                title="Email Us"
                content="support@designstream.com"
              />
              <ContactCard
                icon={<Phone className="h-5 w-5" />}
                title="Call Us"
                content="+1 (555) 123-4567"
              />
              <ContactCard
                icon={<MapPin className="h-5 w-5" />}
                title="Visit Our Office"
                content="123 Design Avenue, Creative District, New York, NY 10001"
              />
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-card rounded-lg p-6 shadow-sm border">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your inquiry..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Find Us</h2>
            <div className="rounded-lg overflow-hidden border h-[400px] bg-muted flex items-center justify-center">
              <div className="text-center px-4">
                <p className="text-muted-foreground mb-2">Map integration would be displayed here</p>
                <p className="text-sm text-muted-foreground">123 Design Avenue, Creative District, New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, content }) => {
  return (
    <div className="bg-card rounded-lg p-4 border shadow-sm">
      <div className="flex items-start gap-4">
        <div className="bg-primary/10 p-2 rounded-md text-primary">
          {icon}
        </div>
        <div>
          <h3 className="font-medium mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
